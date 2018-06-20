import React, { Component } from 'react';
import './../App.css';
import { Input, Button, Card, CardBody, CardSubtitle, CardText, Row, Col, Collapse} from 'reactstrap';
import axios from 'axios';
import Lista from './unidadeList';
import Decodificar from '../adminpage/decodifica'
import Codificar from '../adminpage/codifica'
import {Token} from '../login/Login';

var token = {
  headers:
  { 
    'cache-control': 'no-cache',
    'x-access-token': Token(),
    accept: 'application/json',
    'content-type': 'application/json'
  }
};
var clickInfo = false;
class vincUnidade extends Component {
  constructor(){
    super();
    this.state = {
      codigo: "",
      open: false,
      response: [],
      token:"",
    };

    this.onChange = (evento) => {
      this.setState({nome: evento.target.value});
      const state = Object.assign({}, this.state);
      const campo = evento.target.name;

      state[campo] = evento.target.value;

      this.setState(state);
      this.setState( {codigo: (evento.target.value)} );

    };
  }
  componentDidMount() {
    clickInfo = false;
  }



  render(){
    return (
          <Card  className="Card-position">
            <CardBody>
              <form>
                <div className="form-group">
                  <p></p>
                  <CardSubtitle>Insira o Código da Unidade: </CardSubtitle>
                  <Input  type="text"  className="form-control" name="codigo"
                    value={this.state.codigo} onChange={this.onChange} />
                </div>
                <div>
                  <Button outline onClick={()=> {

                    axios.get('https://hulw.herokuapp.com/unidade/codigo/' + (this.state.codigo),token )
                    .then((response) => {
                      this.setState({response: response.data});
                      this.setState({open: true });
                      //console.log(response.status)
                    })
                    .catch((error) => {
                      this.setState({open: false });
                      if(error.response.status == 404){
                        alert("Unidade não cadastrada, você será redirecionado para o cadastro de novas unidades!")
                        window.open("/unidade","_self");
                      }
                    });
                    clickInfo = true;
                  }}>Cadastrar/Pesquisar</Button>
              </div>
            </form>
            <Collapse isOpen={this.state.open}>
              {clickInfo === true &&
                <div>
                  <Lista list={this.state.response}  codUnidade={this.state.codigo}/>
                </div>
              }
            </Collapse>
          </CardBody>
        </Card>
  )
}}

function cpf2int(cpf){
  cpf = cpf.replace(/[^0-9]+/g,'');

  return cpf;
}



export default vincUnidade;
