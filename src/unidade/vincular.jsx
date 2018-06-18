import React, {Component} from 'react';
import './../App.css';
import { Input, Button, Card, CardBody, CardSubtitle, Label,FormGroup, Collapse} from 'reactstrap';
//import { DropdownMenu, DropdownItem } from 'reactstrap';
import axios from 'axios'
import Lista from './checkUsuario';

const dados = {
  usuario: {
    NOME: "Zezinho Administrador da Silva",
    CPF:  "123.456.789-00",
    EMAIL: "zezinho.admin@boy.com",
  }
};


const URL = 'https://hulwteste.herokuapp.com/'
var clickInfo = false;
class vincular extends React.Component{
    constructor(){
        super();
        this.state = {
          unidades :[],
          unidade: "",
          descricao: "",
          cpf: "",
          response: [],
        };

        this.onChange = (evento) => {
          //this.setState({nome: evento.target.value});
          const state = Object.assign({}, this.state);
          const campo = evento.target.name;
    
          state[campo] = evento.target.value;
    
          this.setState(state);
          if(campo === 'cpf'){
            this.setState({cpf: formatarCpf(evento.target.value) } );
          }
          
        };
          this.handleSubmit = event => {};
    
      }
    

     pegaDados(){
       var codUnidade = (this.props.location.search).substring(1);
       var token = {
        headers:
        { 
          'cache-control': 'no-cache',
          'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIsImNwZiI6IjEwNDEwNDEwNDEwIiwiaWF0IjoxNTI5MjQ3Mjk4LCJleHAiOjE1MjkzMzM2OTh9.l9xtUlHBBn6sgXbNB5Gm_YIzfwk096h27nYNmSRVJCE',
          accept: 'application/json',
          'content-type': 'application/json'
        }
      };

       axios.get(`${URL}unidade/codigo/`+codUnidade, token)
       .then(res => {
         const unidades = res.data;
         this.setState({unidade: unidades.cd_Unidade, descricao: unidades.de_UNIDADE})
       })



      }

      componentWillMount() {

        this.pegaDados();
      }

      render(){
        return (
          <div className="container">
            <div className="col-md-16">
              <Card  className="Card-position">
                <CardBody>
    
                  <form onSubmit={this.handleSubmit}>
                    <h3>Adicionar Vínculo de Unidades</h3>
    
                    <div className="form-group">
                      <CardSubtitle>Unidade: </CardSubtitle>
                      <Input  type="text"  className="form-control"  name="unidade"
                        value={somenteNumeros(this.state.unidade)} onChange={this.onChange} disabled required/>
                    </div>
  
  
                      <div className="form-group">
                        <CardSubtitle>Descrição: </CardSubtitle>
                        <Input  type="text"  className="form-control"  name="descricao"
                          value={this.state.descricao} onChange={this.onChange} disabled required/>
                      </div>
                      
                      
                      <div className="form-group">
                         <p></p>
                         <CardSubtitle>Insira o CPF do usuario que deseja vincular a esta unidade: </CardSubtitle>
                         <Input  type="text"  className="form-control" name="cpf"
                          value={this.state.cpf} onChange={this.onChange} minLength='14' maxLength='14' />
                      </div>
                          <div>
                      <Button outline onClick={()=> {        
                        var token = {
                            headers:
                            { 
                              'cache-control': 'no-cache',
                              'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIsImNwZiI6IjEwNDEwNDEwNDEwIiwiaWF0IjoxNTI5MjQ3Mjk4LCJleHAiOjE1MjkzMzM2OTh9.l9xtUlHBBn6sgXbNB5Gm_YIzfwk096h27nYNmSRVJCE',
                              'accept': 'application/json',
                              'content-type': 'application/json'
                            }
                      };axios.get('https://hulwteste.herokuapp.com/usuario/cpf/' + cpf2int(this.state.cpf),token )
                        .then((response) => {
                          this.setState({response: response.data});
                          this.setState({open: true });
                        })
                        .catch((error) => {
                          this.setState({open: false });
                          if(error.response.status == 404){
                            alert("Usuário não cadastrado!")
                            window.open("/cadastroTec","_self");
                          }
                        });
                        clickInfo = true;
                      }}>Pesquisar</Button>
                     </div> 
                  </form>
                  <Collapse isOpen={this.state.open}>
                   {clickInfo === true &&
                    <div>
                  <Lista list={this.state.response} cpfAdmin={cpf2int(dados.usuario.CPF)} codUnidade = {this.state.unidade}/>
                     </div>
                     }
                  </Collapse>
                      <Button outline href="/administrador" className="a-fix">Voltar</Button>
                </CardBody>
              </Card>
            </div>
          </div>
    
        )
    
      }
    }

function cpf2int(cpf){
   cpf = cpf.replace(/[^0-9]+/g,'');
    
   return cpf;
}

function formatarCpf(cpf){
  cpf = cpf.replace(/\D/g,"");
  cpf = cpf.replace(/(\d{3})(\d)/,"$1.$2");
  cpf = cpf.replace(/(\d{3})(\d)/,"$1.$2");
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
  return cpf;
}

function somenteNumeros(num){
    num = num.replace(/\D/g,"");
    return num;
  }

export default vincular;