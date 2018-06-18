import React  from 'react';
import './../App.css';
import { Input, Form, Label, FormGroup, FormText,Button, Card, CardBody, CardSubtitle, CardText, Row, Col} from 'reactstrap';
import axios from 'axios';
import PageHeader from '../pageHeader';



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

class avaliacaoprob extends React.Component {
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
  
    var formNotes1 = <div>
    <FormGroup tag="fieldset"><FormGroup check inline><Label check>
                            <Input type="radio" value='0' name="radio1" />{'0'}
         </Label></FormGroup><FormGroup check inline><Label check>
                            <Input type="radio" value='1' name="radio1" />{'1'}
         </Label></FormGroup><FormGroup check inline><Label check>
                            <Input type="radio" value='2' name="radio1"  />{'2'}
         </Label></FormGroup><FormGroup check inline><Label check>
                            <Input type="radio" value='3' name="radio1" />{'3'}
         </Label></FormGroup><FormGroup check inline><Label check>
                            <Input type="radio" value='4' name="radio1" />{'4'}
         </Label></FormGroup><FormGroup check inline><Label check>
                            <Input type="radio" value='5' name="radio1"  />{'5'}
         </Label></FormGroup><FormGroup check inline><Label check>
                            <Input type="radio" value='6' name="radio1" />{'6'}
         </Label></FormGroup><FormGroup check inline><Label check>
                            <Input type="radio" value='7' name="radio1"  />{'7'}
         </Label></FormGroup><FormGroup check inline><Label check>
                            <Input type="radio" value='8' name="radio1" />{'8'}
         </Label></FormGroup><FormGroup check inline><Label check>
                            <Input type="radio" value='9' name="radio1" />{'9'}
         </Label></FormGroup><FormGroup check inline><Label check>
                            <Input type="radio" value='10' name="radio1" />{'10'}
         </Label></FormGroup></FormGroup></div>

var formNotes2 = <div>
<FormGroup tag="fieldset"><FormGroup check inline><Label check>
                        <Input type="radio" value='0' name="radio2" />{'0'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='1' name="radio2" />{'1'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='2' name="radio2"  />{'2'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='3' name="radio" />{'3'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='4' name="radio2" />{'4'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='5' name="radio2"  />{'5'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='6' name="radio2" />{'6'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='7' name="radio2"  />{'7'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='8' name="radio2" />{'8'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='9' name="radio2" />{'9'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='10' name="radio2" />{'10'}
     </Label></FormGroup></FormGroup></div>

var formNotes3 = <div>
<FormGroup tag="fieldset"><FormGroup check inline><Label check>
                        <Input type="radio" value='0' name="radio3" />{'0'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='1' name="radio3" />{'1'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='2' name="radio3"  />{'2'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='3' name="radio3" />{'3'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='4' name="radio3" />{'4'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='5' name="radio3"  />{'5'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='6' name="radio3" />{'6'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='7' name="radio3"  />{'7'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='8' name="radio3" />{'8'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='9' name="radio3" />{'9'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='10' name="radio3" />{'10'}
     </Label></FormGroup></FormGroup></div>

var formNotes4 = <div>
<FormGroup tag="fieldset"><FormGroup check inline><Label check>
                        <Input type="radio" value='0' name="radio4" />{'0'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='1' name="radio4" />{'1'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='2' name="radio4"  />{'2'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='3' name="radio4" />{'3'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='4' name="radio4" />{'4'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='5' name="radio4"  />{'5'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='6' name="radio4" />{'6'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='7' name="radio4"  />{'7'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='8' name="radio4" />{'8'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='9' name="radio4" />{'9'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='10' name="radio4" />{'10'}
     </Label></FormGroup></FormGroup></div>

var formNotes5 = <div>
<FormGroup tag="fieldset"><FormGroup check inline><Label check>
                        <Input type="radio" value='0' name="radio5" />{'0'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='1' name="radio5" />{'1'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='2' name="radio5"  />{'2'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='3' name="radio5" />{'3'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='4' name="radio5" />{'4'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='5' name="radio5"  />{'5'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='6' name="radio5" />{'6'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='7' name="radio5"  />{'7'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='8' name="radio5" />{'8'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='9' name="radio5" />{'9'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='10' name="radio5" />{'10'}
     </Label></FormGroup></FormGroup></div>

var formNotes6 = <div>
<FormGroup tag="fieldset"><FormGroup check inline><Label check>
                        <Input type="radio" value='0' name="radio6" />{'0'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='1' name="radio6" />{'1'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='2' name="radio6"  />{'2'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='3' name="radio6" />{'3'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='4' name="radio6" />{'4'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='5' name="radio6"  />{'5'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='6' name="radio6" />{'6'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='7' name="radio6"  />{'7'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='8' name="radio6" />{'8'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='9' name="radio6" />{'9'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='10' name="radio6" />{'10'}
     </Label></FormGroup></FormGroup></div>

var formNotes7 = <div>
<FormGroup tag="fieldset"><FormGroup check inline><Label check>
                        <Input type="radio" value='0' name="radio7" />{'0'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='1' name="radio7" />{'1'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='2' name="radio7"  />{'2'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='3' name="radio7" />{'3'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='4' name="radio7" />{'4'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='5' name="radio7"  />{'5'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='6' name="radio7" />{'6'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='7' name="radio7"  />{'7'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='8' name="radio7" />{'8'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='9' name="radio7" />{'9'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='10' name="radio7" />{'10'}
     </Label></FormGroup></FormGroup></div>

var formNotes8 = <div>
<FormGroup tag="fieldset"><FormGroup check inline><Label check>
                        <Input type="radio" value='0' name="radio8" />{'0'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='1' name="radio8" />{'1'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='2' name="radio8"  />{'2'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='3' name="radio8" />{'3'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='4' name="radio8" />{'4'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='5' name="radio8"  />{'5'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='6' name="radio8" />{'6'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='7' name="radio8"  />{'7'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='8' name="radio8" />{'8'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='9' name="radio8" />{'9'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='10' name="radio8" />{'10'}
     </Label></FormGroup></FormGroup></div>

var formNotes9 = <div>
<FormGroup tag="fieldset"><FormGroup check inline><Label check>
                        <Input type="radio" value='0' name="radio9" />{'0'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='1' name="radio9" />{'1'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='2' name="radio9"  />{'2'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='3' name="radio9" />{'3'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='4' name="radio9" />{'4'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='5' name="radio9"  />{'5'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='6' name="radio9" />{'6'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='7' name="radio9"  />{'7'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='8' name="radio9" />{'8'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='9' name="radio9" />{'9'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='10' name="radio9" />{'10'}
     </Label></FormGroup></FormGroup></div>

var formNotes10 = <div>
<FormGroup tag="fieldset"><FormGroup check inline><Label check>
                        <Input type="radio" value='0' name="radio10" />{'0'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='1' name="radio10" />{'1'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='2' name="radio10"  />{'2'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='3' name="radio10" />{'3'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='4' name="radio10" />{'4'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='5' name="radio10"  />{'5'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='6' name="radio10" />{'6'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='7' name="radio10"  />{'7'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='8' name="radio10" />{'8'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='9' name="radio10" />{'9'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='10' name="radio10" />{'10'}
     </Label></FormGroup></FormGroup></div>

var formNotes11 = <div>
<FormGroup tag="fieldset"><FormGroup check inline><Label check>
                        <Input type="radio" value='0' name="radio11" />{'0'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='1' name="radio11" />{'1'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='2' name="radio11"  />{'2'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='3' name="radio11" />{'3'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='4' name="radio11" />{'4'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='5' name="radio11"  />{'5'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='6' name="radio11" />{'6'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='7' name="radio11"  />{'7'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='8' name="radio11" />{'8'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='9' name="radio11" />{'9'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='10' name="radio11" />{'10'}
     </Label></FormGroup></FormGroup></div>
  
  var formNotes12 = <div>
<FormGroup tag="fieldset"><FormGroup check inline><Label check>
                        <Input type="radio" value='0' name="radio12" />{'0'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='1' name="radio12" />{'1'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='2' name="radio12"  />{'2'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='3' name="radio12" />{'3'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='4' name="radio12" />{'4'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='5' name="radio12"  />{'5'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='6' name="radio12" />{'6'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='7' name="radio12"  />{'7'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='8' name="radio12" />{'8'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='9' name="radio12" />{'9'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='10' name="radio12" />{'10'}
     </Label></FormGroup></FormGroup></div>

  var formNotes13 = <div>
  <FormGroup tag="fieldset"><FormGroup check inline><Label check>
                          <Input type="radio" value='0' name="radio13" />{'0'}
      </Label></FormGroup><FormGroup check inline><Label check>
                          <Input type="radio" value='1' name="radio13" />{'1'}
      </Label></FormGroup><FormGroup check inline><Label check>
                          <Input type="radio" value='2' name="radio13"  />{'2'}
      </Label></FormGroup><FormGroup check inline><Label check>
                          <Input type="radio" value='3' name="radio13" />{'3'}
      </Label></FormGroup><FormGroup check inline><Label check>
                          <Input type="radio" value='4' name="radio13" />{'4'}
      </Label></FormGroup><FormGroup check inline><Label check>
                          <Input type="radio" value='5' name="radio13"  />{'5'}
      </Label></FormGroup><FormGroup check inline><Label check>
                          <Input type="radio" value='6' name="radio13" />{'6'}
      </Label></FormGroup><FormGroup check inline><Label check>
                          <Input type="radio" value='7' name="radio13"  />{'7'}
      </Label></FormGroup><FormGroup check inline><Label check>
                          <Input type="radio" value='8' name="radio13" />{'8'}
      </Label></FormGroup><FormGroup check inline><Label check>
                          <Input type="radio" value='9' name="radio13" />{'9'}
      </Label></FormGroup><FormGroup check inline><Label check>
                          <Input type="radio" value='10' name="radio13" />{'10'}
      </Label></FormGroup></FormGroup></div>

  var formNotes14 = <div>
  <FormGroup tag="fieldset"><FormGroup check inline><Label check>
                          <Input type="radio" value='0' name="radio14" />{'0'}
      </Label></FormGroup><FormGroup check inline><Label check>
                          <Input type="radio" value='1' name="radio14" />{'1'}
      </Label></FormGroup><FormGroup check inline><Label check>
                          <Input type="radio" value='2' name="radio14"  />{'2'}
      </Label></FormGroup><FormGroup check inline><Label check>
                          <Input type="radio" value='3' name="radio14" />{'3'}
      </Label></FormGroup><FormGroup check inline><Label check>
                          <Input type="radio" value='4' name="radio14" />{'4'}
      </Label></FormGroup><FormGroup check inline><Label check>
                          <Input type="radio" value='5' name="radio14"  />{'5'}
      </Label></FormGroup><FormGroup check inline><Label check>
                          <Input type="radio" value='6' name="radio14" />{'6'}
      </Label></FormGroup><FormGroup check inline><Label check>
                          <Input type="radio" value='7' name="radio14"  />{'7'}
      </Label></FormGroup><FormGroup check inline><Label check>
                          <Input type="radio" value='8' name="radio14" />{'8'}
      </Label></FormGroup><FormGroup check inline><Label check>
                          <Input type="radio" value='9' name="radio14" />{'9'}
      </Label></FormGroup><FormGroup check inline><Label check>
                          <Input type="radio" value='10' name="radio14" />{'10'}
      </Label></FormGroup></FormGroup></div>

  var formNotes15 = <div>
  <FormGroup tag="fieldset"><FormGroup check inline><Label check>
                          <Input type="radio" value='0' name="radio15" />{'0'}
      </Label></FormGroup><FormGroup check inline><Label check>
                          <Input type="radio" value='1' name="radio15" />{'1'}
      </Label></FormGroup><FormGroup check inline><Label check>
                          <Input type="radio" value='2' name="radio15"  />{'2'}
      </Label></FormGroup><FormGroup check inline><Label check>
                          <Input type="radio" value='3' name="radio15" />{'3'}
      </Label></FormGroup><FormGroup check inline><Label check>
                          <Input type="radio" value='4' name="radio15" />{'4'}
      </Label></FormGroup><FormGroup check inline><Label check>
                          <Input type="radio" value='5' name="radio15"  />{'5'}
      </Label></FormGroup><FormGroup check inline><Label check>
                          <Input type="radio" value='6' name="radio15" />{'6'}
      </Label></FormGroup><FormGroup check inline><Label check>
                          <Input type="radio" value='7' name="radio15"  />{'7'}
      </Label></FormGroup><FormGroup check inline><Label check>
                          <Input type="radio" value='8' name="radio15" />{'8'}
      </Label></FormGroup><FormGroup check inline><Label check>
                          <Input type="radio" value='9' name="radio15" />{'9'}
      </Label></FormGroup><FormGroup check inline><Label check>
                          <Input type="radio" value='10' name="radio15" />{'10'}
      </Label></FormGroup></FormGroup></div>


    return (
      <div className="container">
        <div className="col-md-16">
          <Card  className="Card-position">
            <Info_user {...dados}/>
            <CardBody>
              


 <h5><b>I – ASSIDUIDADE - Refere-se ao comparecimento, pontual, regular e a presença permanente na unidade de trabalho.</b></h5>

<p><b>1</b>. Cumpre os horários de entrada e saída no trabalho com pontualidade;</p>
  
      {formNotes1}

<p><b>2</b>. Permanece no local de trabalho durante o expediente;</p>

      {formNotes2}

<p><b>3</b>. As eventuais chegadas com atraso ou saídas antecipadas realizam-se dentro dos limites de tolerância, estabelecidos pela instituição;</p>

      {formNotes3}

 <h5><b>II – DISCIPLINA - Refere-se ao comportamento, ao respeito à hierarquia e ao cumprimento da legislação e normas internas.</b></h5>

<p><b>1</b>. Segue cuidadosamente as normas de trabalho da unidade;</p>

      {formNotes4}

<p><b>2</b>. Conhece e observa a hierarquia funcional, cumprindo as ordens recebidas quando de acordo com as normas legais;</p>

      {formNotes5}
  
<p><b>3</b>. Conhece as atribuições de seu cargo;</p>

      {formNotes6}

 <h5><b>III - CAPACIDADE DE INICIATIVA – Refere-se à capacidade do servidor de tomar decisões em face de problemas surgidos no contexto de suas atividades,
   bem como de adaptar-se ou buscar soluções adequadas por seus próprios meios, visando sempre o sucesso do grupo e a melhoria do trabalho.</b></h5>

<p><b>1</b>. Encaminha correta e adequadamente os assuntos que fogem à sua alçada decisória;</p>

      {formNotes7}

<p><b>2</b>. Apresenta sugestões e críticas construtivas para realização do trabalho;</p>

      {formNotes8}


<p><b>3</b>. Investe tempo e recursos no seu desenvolvimento profissional;</p>

         {formNotes9}

 <h5><b>IV – PRODUTIVIDADE - Volume de trabalho produzido, levando-se em conta a complexidade,
    o tempo de execução e as condições de trabalho sem prejuízo da qualidade.</b></h5>

<p><b>1</b>. Racionaliza o uso de recursos materiais, para execução do trabalho;</p>

      {formNotes10}

<p><b>2</b>. Executa o seu trabalho sem necessidade de ordens e orientações constantes;</p>

      {formNotes11}


<p><b>3</b>. Produz volume de trabalho proporcional à sua complexidade;</p>

         {formNotes12}

 <h5><b>V – RESPONSABILIDADE – Comprometimento, empenho, seriedade com que encara seu trabalho,
           bem como zelo por equipamentos, informações, valores ou pessoas envolvidas na execução de suas tarefas.</b></h5>

<p><b>1</b>. Corresponde à confiança que lhe é dada no trabalho;</p>

      {formNotes13}

<p><b>2</b>. Resguarda fatos de interesse da administração, agindo com discrição;</p>

      {formNotes14}


<p><b>3</b>. Preocupa-se com o êxito do seu trabalho;</p>

         {formNotes15}

  <hr/>
    <Button color="primary" value=''> Gravar</Button>{' '}
      <Button color="danger" value=''>Cancelar</Button>{' '}

      </CardBody>
    </Card>
  </div>
  </div>
    )}
  
}
  


export default avaliacaoprob;