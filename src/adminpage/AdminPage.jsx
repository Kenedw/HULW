import React, { Component } from 'react';
import './../App.css';
import { Input, Button, Card, CardBody, CardSubtitle, CardText, Row, Col, Collapse} from 'reactstrap';
import axios from 'axios';
import Lista from './todoList.jsx';

const dados = {
  usuario: {
    NOME: "Zezinho Administrador da Silva",
    CPF:  "123.456.789-00",
    EMAIL: "zezinho.admin@boy.com",
  }
};

class Info_adm extends Component {

  render() {
    return (
      <div>
        <Card >
          <CardBody>
            <Row>
              <Col>
                <CardSubtitle>Nome: </CardSubtitle>
                <CardText>{this.props.usuario.NOME}</CardText>
                <CardSubtitle>Email: </CardSubtitle>
                <CardText>{this.props.usuario.EMAIL}</CardText>
              </Col>
              <Col>
                <CardSubtitle>CPF: </CardSubtitle>
                <CardText>{this.props.usuario.CPF}</CardText>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}


var clickInfo = false;
class admin extends Component {
  constructor(){
    super();
    this.state = {
      cpf: "",
      open: false,
      response: []
    };

    this.onChange = (evento) => {
      this.setState({nome: evento.target.value});
      const state = Object.assign({}, this.state);
      const campo = evento.target.name;

      state[campo] = evento.target.value;

      this.setState(state);
      if(campo === 'cpf'){
        this.setState( {cpf: formatarCpf(evento.target.value)} ); // atualiza o valor do cpf formatado
      }
    };
  }
  componentDidMount() {
    clickInfo = false;
  }
  render(){
    return (
      <div className="container">
        <div className="col-md-16">
          <Card  className="Card-position">
            <CardBody>
              <form>
                <h3>Administrador</h3>
                <div>
                  <Info_adm {...dados}/>
                </div>
                <div className="form-group">
                  <p></p>
                  <CardSubtitle>Pesquisar CPF: </CardSubtitle>
                  <Input  type="text"  className="form-control" name="cpf"
                    value={this.state.cpf} onChange={this.onChange} minLength='14' maxLength='14' />
                </div>
                <div>
                  <Button outline >Cadastrar Setor</Button>
                  <Button outline onClick={()=> {axios.get('https://hulw.herokuapp.com/usuario/cpf/' + cpf2int(this.state.cpf) )
                    .then((response) => {
                      this.setState({response: response.data});
                      this.setState({open: true });
                      console.log(response.data);
                    });
                    clickInfo = true;
                  }}
                  className="a-fix">Pesquisar</Button>
              </div>
            </form>
            <Collapse isOpen={this.state.open}>
              {clickInfo === true &&
                <div>
                  <Lista list={this.state.response}/>
                </div>
              }
            </Collapse>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}}


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


export default admin;
