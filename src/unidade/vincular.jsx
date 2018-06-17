import React, {Component} from 'react';
import './../App.css';
import { Input, Button, Card, CardBody, CardSubtitle, Label,FormGroup} from 'reactstrap';
//import { DropdownMenu, DropdownItem } from 'reactstrap';
import axios from 'axios'


const URL = 'https://hulw.herokuapp.com/'

class vincular extends React.Component{
    constructor(){
        super();
        this.state = {
          unidades :[],
          unidade: "",
          descricao: "",
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
          this.handleSubmit = event => {};
    
      }
    
      

     pegaDados(){
       var codUnidade = (this.props.location.search).substring(1);

       axios.get(`${URL}unidade/codigo/`+codUnidade)                    //'http://localhost:3003/api/todos`)
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
               
                    <div>
                      <Button onSubmit={this.handleSubmit} outline type="Submit" >Gravar</Button>
                      <Button outline href="/" className="a-fix">Voltar</Button>
                    </div>
                    
                  </form>
                </CardBody>
              </Card>
            </div>
          </div>
    
        )
    
      }
    }
  
function somenteNumeros(num){
    num = num.replace(/\D/g,"");
    return num;
  }

export default vincular;