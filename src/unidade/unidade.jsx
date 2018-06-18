import React, { Component } from 'react';
import './../App.css';
import { Input, Row, Col, Button,ButtonGroup, Card, CardBody, CardSubtitle, Label,FormGroup, CustomInput} from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import axios from 'axios'
import Decodificar from '../adminpage/decodifica'
import Codificar from '../adminpage/codifica'

const URL = 'https://hulwteste.herokuapp.com/'


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
          var token = {
            headers:
            { 'postman-token': '9e60e149-eae0-183f-7716-ded2c58b4471',
              'cache-control': 'no-cache',
              'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIsImNwZiI6IjEwNDEwNDEwNDEwIiwiaWF0IjoxNTI5MjQ3Mjk4LCJleHAiOjE1MjkzMzM2OTh9.l9xtUlHBBn6sgXbNB5Gm_YIzfwk096h27nYNmSRVJCE',
              'accept': 'application/json',
              'content-type': 'application/json'
            }
          };
          const unidades = {
            cd_Unidade: this.state.unidade,
            de_UNIDADE: this.state.descricao,
            id_Unidade_Superior: this.state.unidade_pai,
           
          };
      
          axios.post(`${URL}unidade`,JSON.stringify(unidades), token) //JSON.stringify(usuario)
            .then(res => { 
              //console.log(res.Object.data);
              console.log(res.data);
              alert(res.data.message) // alerta sucesso ao cadastrar
              window.location.reload() // atualiza a página caso sucesso
            })
            .catch(error => {
              console.log(error.response);//.data.error.message);
              alert(error.response.data)//.error.message) // alerta o erro ao submit
            });
        };
  
    }
  
    
    componentDidMount() {
      var token = {
        headers:
        { 'postman-token': '9e60e149-eae0-183f-7716-ded2c58b4471',
          'cache-control': 'no-cache',
          'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIsImNwZiI6IjEwNDEwNDEwNDEwIiwiaWF0IjoxNTI5MjQ3Mjk4LCJleHAiOjE1MjkzMzM2OTh9.l9xtUlHBBn6sgXbNB5Gm_YIzfwk096h27nYNmSRVJCE',
          'accept': 'application/json',
          'content-type': 'application/json'
        }
      };
      axios.get(`${URL}unidade`,token)                    //'http://localhost:3003/api/todos`)
        .then(res => {
          const unidades = res.data;
          this.setState({ unidades });
        })
      }

      pegaDados(){
        var dados_url = Decodificar((this.props.location.search).substring(1))
    
        var cpfAdmin = (dados_url).substring(0,11);
        //alert(cpfAdmin);
        var token_url =  (dados_url).substring(11);
        this.setState({token: token_url, cpf_Admin: cpfAdmin})

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
                    { this.state.unidades.map(unidade => <option value={unidade.id_Unidade}>{unidade.de_UNIDADE} </option>)}

                    </Input>
                </div>


               
                  <div>
                    <Button onSubmit={this.handleSubmit} outline type="Submit" >Cadastrar</Button>
                    <Button outline href={"/administrador"} className="a-fix">Voltar</Button>
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