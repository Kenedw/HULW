import React, { Component } from 'react';
import './../App.css';
import { Input, Row, Col, Button,ButtonGroup, Card, CardBody, CardSubtitle, Label,FormGroup, CustomInput} from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import axios from 'axios'
import Decodificar from '../adminpage/decodifica'
import Codificar from '../adminpage/codifica'

const URL = 'https://hulw.herokuapp.com/'


class cadastrarUnidade extends React.Component {
    constructor(){
      super();
      this.state = {
        unidades :[],
        unidade: "",
        descricao: "",
        unidade_pai: null,
        token: "",
        cpf_Admin: "",
      };
  
  
      this.onChange = (evento) => {
        //this.setState({nome: evento.target.value});
        const state = Object.assign({}, this.state);
        const campo = evento.target.name;
  
        state[campo] = evento.target.value;
  
        this.setState(state);
        if(campo === 'unidade_pai'){ // &&  evento.target.value === ''){
          // console.log( evento.target.value.length)
          //alert(evento.target.value);
          //alert(state[campo]);
        }
        
  
      };
        this.handleSubmit = event => {
          event.preventDefault();
          var config = {
            headers: {'content-type': 'application/json'}
          };
          const unidades = {
            cd_Unidade: this.state.unidade,
            de_UNIDADE: this.state.descricao,
            id_Unidade_Superior: this.state.unidade_pai,
           
          };
      
          axios.post(`${URL}unidade`,JSON.stringify(unidades), config) //JSON.stringify(usuario)
            .then(res => { 
              //console.log(res.Object.data);
              console.log(res.data);
              alert(res.data.message) // alerta sucesso ao cadastrar
              window.location.reload() // atualiza a página caso sucesso
            })
            .catch(error => {
              console.log(error.response.data.error.message);
              alert(error.response.data.error.message) // alerta o erro ao submit
            });
        };
  
    }
  
    
    componentDidMount() {
      axios.get(`${URL}unidade`)                    //'http://localhost:3003/api/todos`)
        .then(res => {
          const unidades = res.data;
          this.setState({ unidades });
        })
      }

      pegaDados(){
        var dados_url = Decodificar((this.props.location.search).substring(1))
    
        var cpfAdmin = (dados_url).substring(0,11);
        alert(cpfAdmin);
        var token_url =  (dados_url).substring(11);
        this.setState({token: token_url, cpf_Admin: cpfAdmin})
        alert(token_url);
    
       // var bytes = base64.decode(decodifica);
        //var cpfs = utf8.decode(bytes);
        //alert(cpfs);
        /*
        var cpfAdmin = (cpfs).substring(11,23) // salva o segundo CPF referente ao ADMIN
        //var bytes = base64.decode(encoded)
        var cpfEditar = (cpfs).substring(0,11) //utf8.decode(bytes) // CPF para editar/cadastrar
        this.setState({cpf_Admin: cpfAdmin});
        if(cpfEditar !== ""){
         // alert(cpfEditar)
         // alert(cpfAdmin)
          
          axios.get(`${URL}usuario/cpf/`+cpfEditar)                    //'http://localhost:3003/api/todos`)
          .then(res => {
            const usuarios = res.data;
            this.setState({ usuarios });
            this.setState({id_usuario: usuarios.id_Usuario, flagEditar: true, cpf: usuarios.cd_CPF,nome: usuarios.no_Pessoa, email: usuarios.cd_Email,dataAdm: (usuarios.dt_Admissao).substring(0,10)})
          })
        }//else{
       // alert("NAO TEM NADA");
        //}
        */
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
                  <h3>Cadastro de Unidades</h3>
  
                  <div className="form-group">
                    <CardSubtitle>Unidade: </CardSubtitle>
                    <Input  type="text"  className="form-control"  name="unidade"
                      value={somenteNumeros(this.state.unidade)} onChange={this.onChange} required/>
                  </div>


                   
                    <div className="form-group">
                      <CardSubtitle>Descrição: </CardSubtitle>
                      <Input  type="text"  className="form-control"  name="descricao"
                        value={this.state.descricao} onChange={this.onChange} required/>
                    </div>


                <div className="form-group">
                    <Label >Unidade Pai</Label>
                    <Input type="select" name="unidade_pai" id="exampleSelect"
                    value={this.state.unidade_pai} onChange={this.onChange}>
                    <option></option>
                    { this.state.unidades.map(unidade => <option>{unidade.id_Unidade}</option>)}

                    </Input>
                </div>


               
                  <div>
                    <Button onSubmit={this.handleSubmit} outline type="Submit" >Cadastrar</Button>
                    <Button outline href={"/administrador?"+Codificar(this.state.cpf_Admin+this.state.token)} className="a-fix">Voltar</Button>
                  </div>
                  
                </form>
              </CardBody>
            </Card>
          </div>
        </div>
  
      )
  
    }
  }

 //  {JSON.stringify(this.state)}
/*
function retornaDescricao(des){
  des = unidades.des.de_UNIDADE;
  return des;
}
*/
function somenteNumeros(num){
  num = num.replace(/\D/g,"");
  return num;
}

  export default cadastrarUnidade;