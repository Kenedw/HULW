import React, { Component } from 'react';
import './../App.css';
import { Input, Button, Card, CardBody, CardSubtitle, CardText, Row, Col, Collapse} from 'reactstrap';
import axios from 'axios';
import Lista from './todoList.jsx';
import Pesquisa from '../unidade/pesqUnidade';
import Decodificar from './decodifica';


const dados = {
  usuario: {
    NOME: "Zezinho Administrador da Silva",
    CPF:  "123.456.789-00",
    EMAIL: "zezinho.admin@boy.com",
  }
};

var token = {
  headers:
  {
    'cache-control': 'no-cache',
    'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzcsImNwZiI6IjE0NzI1ODM2OTE0IiwiaWF0IjoxNTI5NDIxNTg1LCJleHAiOjE1Mjk1MDc5ODV9.YcRhJCR82SRnWNPags5VRVYxF7_6O1ESgaN_fT4tBK0',
    accept: 'application/json',
    'content-type': 'application/json'
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
                <CardText>{this.props.nome}</CardText>
                <CardSubtitle>Email: </CardSubtitle>
                <CardText>{this.props.email}</CardText>
              </Col>
              <Col>
                <CardSubtitle>CPF: </CardSubtitle>
                <CardText>{this.props.cpf_admin}</CardText>
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
      cpf_admin: "",
      email:"",
      nome:"",
      open: false,
      response: [],
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
    axios.get('https://hulwteste.herokuapp.com/auth/me',token )
    .then(res => {
      const dados = res.data;
      this.setState({ dados });

      this.setState({nome: dados[0].no_Pessoa, cpf_admin: dados[0].cd_CPF, email: dados[0].cd_Email });
      //alert(JSON.stringify(dados))
    });/*
    .catch((error) => {
      this.setState({open: false });
      if(error.response.status == 404){
        alert("Usuário não cadastrado!")
        //window.open("/cadastroTec","_self");
      }
    });*/
  }
/*
  pegaDados(){
    var dados_url = Decodificar((this.props.location.search).substring(1))

    var cpfAdmin = (dados_url).substring(0,11);
    var token_url =  (dados_url).substring(11);
    if(token_url !== ""){
      this.setState({token: token_url})
    }
  }

  componentWillMount() {

    this.pegaDados();
  }

*/

  render(){
    return (
      <div className="container">
        <div className="col-md-16">
          <Card  className="Card-position">
            <CardBody>
              <form>
                <h3>Administrador</h3>
                <Info_adm {...this.state}/>
                <Card>
                </Card>
                <div className="form-group">
                  <p></p>
                  <CardSubtitle>Pesquisar CPF: </CardSubtitle>
                  <Input  type="text"  className="form-control" name="cpf"
                    value={this.state.cpf} onChange={this.onChange} minLength='14' maxLength='14' />
                </div>
                <div>
                  <Button outline onClick={()=> {
                    axios.get('https://hulwteste.herokuapp.com/usuario/cpf/' + cpf2int(this.state.cpf),token )
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
                  }}>Cadastrar/Pesquisar</Button>
                  <Button className="a-fix" outline href={"/vincularprob"}>Vincular Probatorio</Button>
                </div>
              </form>
              <Collapse isOpen={this.state.open}>
                {clickInfo === true &&
                  <div>
                    <Lista list={this.state.response} cpfAdmin={cpf2int(dados.usuario.CPF)}/>
                  </div>
                }
              </Collapse>
            </CardBody>
          </Card>
        </div>
        <Pesquisa cpf_adm={dados.usuario.CPF} token={this.state.token}/>
      </div>
    );
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


export default admin;
