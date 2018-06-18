import React, { Component } from 'react';
import './../App.css';
import { Container, Row, Col, Button, Table, Card, CardText, CardBody, CardSubtitle} from 'reactstrap';


const dados = {
  avaliacao: [
    {
      id: "1",
      ano: "2018",
      nome: "Kened Wanderson Cruz Oliveira",
      tipo: "Desempenho",
      estado: "Pendente"
    },
    {
      id: "2",
      ano: "2018",
      nome: "Zezinho Cirurgião da Silva",
      tipo: "Desempenho",
      estado: "Agardando Superior"
    },
    {
      id: "3",
      ano: "2018",
      nome: "Maria da Silva",
      tipo: "Desempenho",
      estado: "Avaliado"
    },
    {
      id: "4",
      ano: "2017",
      nome: "Zezinho Cirurgião da Silva",
      tipo: "Probatoria",
      estado: "Avaliado"
    }
  ]
};

var id = ""
var dados2 = "";
var chefe = false;

const pegarUnidade = async (id, token) =>{
  const response = await fetch('http://hulw.herokuapp.com/localizacao/usuario/'+id,{
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "x-access-token": token
    }
  });
  const json = await response.json();

  return json[0];
}

const pegaDados = async (url) => {

  var token = await (url).substring(1)

  const response = await fetch('https://hulwteste.herokuapp.com/auth/me/',{
      method: 'GET',
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "x-access-token": token
      }
  });
  const json = await response.json();
  var nome = await json[0].no_Pessoa;
  var cpf = await json[0].cd_CPF;
  var email = await json[0].cd_Email;
  var id = await json[0].id_Usuario;

  var cpfPontos = [cpf.slice(0,3),'.',cpf.slice(3)].join('');
  cpfPontos = [cpfPontos.slice(0,7),'.',cpfPontos.slice(7)].join('');
  cpfPontos = [cpfPontos.slice(0,11),'-',cpfPontos.slice(11)].join('');

  return ({nome,cpfPontos,email,id,token});

}

export class Userpage extends Component {

  constructor(){
    super();
    this.state = {
      CPF: "",
      NOME: "",
      EMAIL: "",
      UNIDADE: "32161920",
      ID: "",
      TOKEN: ""
    }
  }

  async componentWillMount() {

    var resposta = await pegaDados(this.props.location.search);
    this.setState({TOKEN: resposta.token});
    this.setState({NOME: resposta.nome});
    this.setState({EMAIL: resposta.email});
    this.setState({ID: resposta.id});
    this.setState({CPF: resposta.cpfPontos});

    resposta = await pegarUnidade(this.state.ID,this.state.TOKEN);
    this.setState({UNIDADE: resposta.id_Unidade});
    chefe = resposta.is_Chefe;
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Col>
            <Row>
              <Col>
                <Info_pessoa usuario={this.state}/>
                <Tabela avaliacao={dados.avaliacao}/>
              </Col>
            </Row>
            <Botao/>
          </Col>
        </Container>
      </div>
    );
  }
}

class Info_pessoa extends Component {

  render() {
    return (
      <div>
        <Card  className="Card-position">
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
                <CardSubtitle>Unidade: </CardSubtitle>
                <CardText>{this.props.usuario.UNIDADE}</CardText>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}

class Tabela extends Component {
  render() {
    return (
      <Table className="Tabela-position">
        <thead>
          <tr>
            <th>Ano</th>
            <th>Direcionado</th>
            <th>Tipo da Avaliação</th>
            <th>Situação</th>
          </tr>
        </thead>
        <Linha {...dados}/>
      </Table>
    );
  }
}

class Linha extends Component {

  irPaginaAvaliacao(){
    var base64 = require('base-64')
    var utf8 = require('utf8')

    var bytes = utf8.encode(id)
    var encoded = base64.encode(bytes)
    window.open("/avaliacao?" + encoded,"_self");
  }

  render() {
    return (
      <tbody>
        {dados.avaliacao.map((val) =>
          <tr key={val.id}>
            <td scope="row">{val.ano}</td>
            <td>{val.nome}</td>
            <td>{val.tipo}</td>
            { val.estado === "Avaliado"           && <td className="btn-success">{val.estado}</td> }
            { val.estado === "Agardando Superior" && <td className="btn-warning">{val.estado}</td> }
            { val.estado === "Pendente"           && <td className="btn-danger" onClick={this.irPaginaAvaliacao}> {val.estado}</td> }

          </tr>
        )}
      </tbody>
    );
  }
}

class Botao extends Component {

  logout(){
    window.open("/","_self");
  }

  render() {
    return (
      <div className="btn-position">
        <Button onClick={this.logout} outline >Sair</Button>
      </div>
    );
  }
}
export default Userpage;
