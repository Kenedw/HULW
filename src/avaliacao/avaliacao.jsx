import React  from 'react';
import './../App.css';
import { Input, Button, Card, CardBody, CardSubtitle, CardText, Row, Col} from 'reactstrap';
import axios from 'axios';
import PageHeader from '../pageHeader';
import ReactRadioButtonGroup from 'react-radio-button-group';


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
    this.state = {
      selectedValue: true
    }
  }

  pegaDados(){

    var base64 = require('base-64')
    var utf8 = require('utf8')

    var encoded = (this.props.location.search).substring(1)
    var bytes = base64.decode(encoded)
    var cpf = utf8.decode(bytes)

    //retirando os pontos e os traços
    var cpfLimpo = cpf.substring(0,3) + cpf.substring(4,7) + cpf.substring(8,11) + cpf.substring(12,14)

    return fetch('https://hulw.herokuapp.com/usuario/cpf/' + cpfLimpo)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({Nome: responseJson.no_Pessoa});
    }).catch((error) => {
      console.log('nao encontrou o usuario!!!');
    })
  }

  handleChange(value) {
    this.setState({selectedValue: value});
  }


  render(){
    return (
      <div className="container">
        <div className="col-md-16">
          <Card  className="Card-position">
            <Info_user {...dados}/>
            <CardBody>

  <h5>I - ASSIDUIDADE - Refere-se ao comparecimento, pontual, regular e a presença permanente na unidade de trabalho.</h5>

  <p>1. Cumpre  os horários de entrada e saída no trabalho com pontualidade.
  </p>
  <ReactRadioButtonGroup name="number" options={["One", "Two", "Three"]} value="Three"/>
  <p>2. Permanece no local de trabalho durante o expediente.</p>
  <p>3. As eventuais chegadas com atraso ou saídas antecipadas realizam-se dentro dos limites de tolerância, estabelecidos pela instituição.</p>

  <h5>II -DISCIPLINA - Refere-se ao comportamento, ao respeito à hierarquia a ao cumprimento da legislação e normas internas.</h5>

  <p>1. Segue cuidadosamente as normas de trabalho da unidade.</p>
  <p>2. Conhece e observa a hierarquia funcional, cumprindo as ordens recebidas de quando de acordo com as normas legais.</p>
  <p>3. Conhece as atribuições de seu cargo.</p>

  <h5>III -CAPACIDADE DE INICIATIVA - Refere-se a capacidade do servidor de tomar decisões em face de prolemas surgidos no contexto de suas atividades,
      bem como de adaptar-se ou buscar soluções adequadas por seus próprios meis, visando sempre o sucesso do grupo e a melhoria do trabalho.</h5>

  <p>1. Encaminha correta e adequadamente os assuntos que fogem á sua alçada decisória.</p>
  <p>2. Apresenta sugestões e críticas construtivas para realização de trabalho.</p>
  <p>3. Investe tempo e recursos no seu desenvolvimento profissional.</p>

  <h5>IV -PRODUTIVIDADE - Volume de trabalho produzido, levando-se em conta a complexidade, o tempo de execução e as condições de trabalho sem prejuízo
      da qualidade.</h5>

  <p>1. Racionaliza o uso de recursos materiais, para a execução do trabalho.</p>
  <p>2. Executa o seu trabalho sem a necessidade de ordens e orientações constantes.</p>
  <p>3. Produz volume de trabalho proporcional à sua complexidade.</p>

  <h5>V -RESPONSABILIDADE - Comprometimento, empenho, seriedade com que encara seu trabalho, bem como zelo por equipamentos, informações, valores
      ou pessoas envolvidas na execução de suas tarefas.</h5>

  <p>1. Corresponde à confiança que lhe é dada no trabalho.</p>
  <p>2. Resguarda fatos de interesse da administração, agindo com descrição.</p>
  <p>3. Preocupa-se com o êxito do seu trabalho.</p>
  <hr/>
    <Button color="primary"> Gravar</Button>{' '}
      <Button color="danger">Cancelar</Button>{' '}

      </CardBody>
    </Card>
  </div>
  </div>
  )}
}

export default avaliacao;
