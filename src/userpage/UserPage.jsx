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

var cpf = ""

export class Userpage extends Component {

  constructor(){
    super();
    this.state = {
      CPF: "",
      NOME: "",
      EMAIL: "",
      SETOR: "Urgência e emergência"
    }
  }


  pegaDados(){

    var base64 = require('base-64')
    var utf8 = require('utf8')

    var encoded = (this.props.location.search).substring(1)
    var bytes = base64.decode(encoded)
    cpf = utf8.decode(bytes)

    //retirando os pontos e os traços
    var cpfLimpo = cpf.substring(0,3) + cpf.substring(4,7) + cpf.substring(8,11) + cpf.substring(12,14)

    return fetch('https://hulw.herokuapp.com/usuario/cpf/' + cpfLimpo)
      .then((response) => response.json())
      .then((responseJson) => {

        var cpfLE = responseJson.cd_CPF;

        //adicionando os pontos e traços, somente para a tela de usuario
        var cpfPontos = [cpfLE.slice(0,3),'.',cpfLE.slice(3)].join('');
        cpfPontos = [cpfPontos.slice(0,7),'.',cpfPontos.slice(7)].join('');
        cpfPontos = [cpfPontos.slice(0,11),'-',cpfPontos.slice(11)].join('');

        this.setState({CPF: cpfPontos});
        this.setState({NOME: responseJson.no_Pessoa});
        this.setState({EMAIL: responseJson.cd_Email});


      }).catch((error) => {
        console.log('nao encontrou o usuario!!!');
      })
  }

  componentWillMount() {

    this.pegaDados();
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
                <CardSubtitle>Setor: </CardSubtitle>
                <CardText>{this.props.usuario.SETOR}</CardText>
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

  irPaginaFormulario(){
    var base64 = require('base-64')
    var utf8 = require('utf8')

    var bytes = utf8.encode(cpf)
    var encoded = base64.encode(bytes)
    window.open("/formulario?" + encoded,"_self");
  }

  render() {
    return (
      <tbody>
        {dados.avaliacao.map((val) =>
          <tr key={val.id}>
            <td scope="row">{val.ano}</td>
            <td>{val.nome}</td>
            <td>{val.tipo}</td>
            { val.estado === "Avaliado"     && <td className="btn-success">{val.estado}</td> }
            { val.estado === "Agardando Superior" && <td className="btn-warning">   {val.estado}</td> }
            { val.estado === "Pendente"     && <td className="btn-danger" onClick={this.irPaginaFormulario}> {val.estado}</td> }

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
