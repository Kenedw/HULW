import React, { Component } from 'react';
import logo from './Logo UFPB.svg';
import './App.css';
import { Container, Row, Col, Button, Table, Card, CardText, CardBody, CardSubtitle} from 'reactstrap';


export class App extends Component {
  render() {
    return (
      <Container>
      <div className="App">
      <Col>
        <Row  className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Col>
            <Row>
              <h1 className="App-title Text-indent">Sistema de Avaliação de Desempenho</h1>
            </Row>
            <Row>
              <a className="Text-indent">Hospital Universitário Lauro Wanderley</a>
            </Row>
            <Row>
              <p className="Text-indent">Universidade Federal da Paraiba</p>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Info_pessoa />
            <Tabela/>
          </Col>
        </Row>
        <Botao />
      </Col>
      </div>
      </Container>
    );
  }
}
class Info_pessoa extends Component {
  render() {
    return (
      <div>
        <Card  className="Card-position">
          <CardBody>
            <CardSubtitle>Nome: </CardSubtitle>
            <CardText>Zezinho Cirurgião da Silva</CardText>
            <CardSubtitle>CPF: </CardSubtitle>
            <CardText>123.456.789-00</CardText>
            <CardSubtitle>Email: </CardSubtitle>
            <CardText>zezinho.cirurgia@boy.com</CardText>
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
            <th>Tipo da Avaliação</th>
            <th>Situação</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">2016</td>
            <td>Probatoria</td>
            <td className="btn-success">Resultado</td>
          </tr>
          <tr>
            <td scope="row">2017</td>
            <td>Avaliativa</td>
            <td className="btn-success">Resultado</td>
          </tr>
          <tr>
            <td scope="row">2018</td>
            <td>Avaliativa</td>
            <td className="btn-info">Processando</td>
          </tr>
          <tr>
            <td scope="row">2018</td>
            <td>Avaliativa</td>
            <td className="btn-danger">Pendente</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}


class Botao extends Component {
  render() {
    return (
      <div className="btn-position">
        <Button outline>Sair</Button>
      </div>
    );
  }
}
export default App;
