import React  from 'react';
import './../App.css';
import { Input, Button, Card, CardBody, CardSubtitle, CardText, Row, Col,} from 'reactstrap';
import axios from 'axios';
import PageHeader from '../pageHeader'

const dados = {
    usuario: {
      NOME: "Zezinho Administrador da Silva",
      CPF:  "123.456.789-00",
      EMAIL: "zezinho.admin@boy.com",
    }
  };

class Info_user extends React.Component {

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

  class avaliacao extends React.Component {
      constructor(){
          super();
      }

      render(){
        return (
          <div className="container">
            <div className="col-md-16">
              <Card  className="Card-position">
                <CardBody>

                 
            <hr/>
            <Button color="primary"> Gravar</Button>{' '}
            <Button color="danger">Cancelar</Button>{' '}
                 
                </CardBody>
              </Card>
            </div>
          </div>
        )
      }
  }

export default avaliacao;