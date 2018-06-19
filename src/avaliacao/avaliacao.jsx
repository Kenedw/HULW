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

class avaliacao extends React.Component {
  constructor(){
    super();
    this.state = {
      selectedValue: true
      ,IP_USER_AVALIADO: 80
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

  autoAvaliacao(){

    var formNotes14 = <div>
    <FormGroup tag="fieldset"><FormGroup check inline><Label check>
                            <Input type="radio" value='0' name="radio14" />{'0'}
         </Label></FormGroup><FormGroup check inline><Label check>
                            <Input type="radio" value='1' name="radio14" />{'1'}
         </Label></FormGroup><FormGroup check inline><Label check>
                            <Input type="radio" value='2' name="radio14" />{'2'}
         </Label></FormGroup><FormGroup check inline><Label check>
                            <Input type="radio" value='3' name="radio14" />{'3'}
         </Label></FormGroup><FormGroup check inline><Label check>
                            <Input type="radio" value='4' name="radio14" />{'4'}
         </Label></FormGroup><FormGroup check inline><Label check>
                            <Input type="radio" value='5' name="radio14" />{'5'}
         </Label></FormGroup><FormGroup check inline><Label check>
                            <Input type="radio" value='6' name="radio14" />{'6'}
         </Label></FormGroup><FormGroup check inline><Label check>
                            <Input type="radio" value='7' name="radio14" />{'7'}
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

    var escreva1 = <div>    
        <p><b>4</b>. Mantém suas informações cadastrais e funcionais atualizadas perante os sistemas de informação da UFPB e Governo Federal (SIAPE, SIGRH entre outros);</p>
            {formNotes14}
        <p><b>5</b>. Mantém atualizada, perante a UFPB, toda a documentação necessária referente ao seu afastamento (cessão, colaboração, exercício provisório entre outros).</p>
            {formNotes15}
    </div>;
      return escreva1; formNotes14; formNotes15;
   }
  chefe() {

    var formNotes14 = <div>
    <FormGroup tag="fieldset"><FormGroup check inline><Label check>
                            <Input type="radio" value='0' name="radio14" />{'0'}
         </Label></FormGroup><FormGroup check inline><Label check>
                            <Input type="radio" value='1' name="radio14" />{'1'}
         </Label></FormGroup><FormGroup check inline><Label check>
                            <Input type="radio" value='2' name="radio14" />{'2'}
         </Label></FormGroup><FormGroup check inline><Label check>
                            <Input type="radio" value='3' name="radio14" />{'3'}
         </Label></FormGroup><FormGroup check inline><Label check>
                            <Input type="radio" value='4' name="radio14" />{'4'}
         </Label></FormGroup><FormGroup check inline><Label check>
                            <Input type="radio" value='5' name="radio14" />{'5'}
         </Label></FormGroup><FormGroup check inline><Label check>
                            <Input type="radio" value='6' name="radio14" />{'6'}
         </Label></FormGroup><FormGroup check inline><Label check>
                            <Input type="radio" value='7' name="radio14" />{'7'}
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

    var escreva2 = <div>

        <p><b>4</b>. Dedica atenção em aprender a utilizar os sistemas de informação da instituição e que são necessários à execução do trabalho no setor;</p>
            {formNotes14}
        <p><b>5</b>. Comunica para a chefia as dificuldades e limitações existentes no setor visando o bom andamento do trabalho.</p>
            {formNotes15}
    </div>
      return escreva2; formNotes14; formNotes15;
  }

  render(){
    const IP_USER_AVALIADO = this.state.IP_USER_AVALIADO;
    var aux;
   if(IP_USER_AVALIADO ===null){
      aux = this.autoAvaliacao()

      } else{
        aux = this.chefe()
     }    
      
    

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

var formNotes21 = <div>
<FormGroup tag="fieldset"><FormGroup check inline><Label check>
                        <Input type="radio" value='0' name="radio21" />{'0'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='1' name="radio21" />{'1'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='2' name="radio21"  />{'2'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='3' name="radio21" />{'3'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='4' name="radio21" />{'4'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='5' name="radio21"  />{'5'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='6' name="radio21" />{'6'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='7' name="radio21"  />{'7'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='8' name="radio21" />{'8'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='9' name="radio21" />{'9'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='10' name="radio21" />{'10'}
     </Label></FormGroup></FormGroup></div>

var formNotes22 = <div>
<FormGroup tag="fieldset"><FormGroup check inline><Label check>
                        <Input type="radio" value='0' name="radio22" />{'0'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='1' name="radio22" />{'1'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='2' name="radio22"  />{'2'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='3' name="radio22" />{'3'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='4' name="radio22" />{'4'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='5' name="radio22"  />{'5'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='6' name="radio22" />{'6'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='7' name="radio22"  />{'7'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='8' name="radio22" />{'8'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='9' name="radio22" />{'9'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='10' name="radio22" />{'10'}
     </Label></FormGroup></FormGroup></div>

var formNotes23 = <div>
<FormGroup tag="fieldset"><FormGroup check inline><Label check>
                        <Input type="radio" value='0' name="radio23" />{'0'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='1' name="radio23" />{'1'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='2' name="radio23"  />{'2'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='3' name="radio23" />{'3'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='4' name="radio23" />{'4'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='5' name="radio23"  />{'5'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='6' name="radio23" />{'6'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='7' name="radio23"  />{'7'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='8' name="radio23" />{'8'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='9' name="radio23" />{'9'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='10' name="radio23" />{'10'}
     </Label></FormGroup></FormGroup></div>

var formNotes24 = <div>
<FormGroup tag="fieldset"><FormGroup check inline><Label check>
                        <Input type="radio" value='0' name="radio24" />{'0'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='1' name="radio24" />{'1'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='2' name="radio24"  />{'2'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='3' name="radio24" />{'3'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='4' name="radio24" />{'4'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='5' name="radio24"  />{'5'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='6' name="radio24" />{'6'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='7' name="radio24"  />{'7'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='8' name="radio24" />{'8'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='9' name="radio24" />{'9'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='10' name="radio24" />{'10'}
     </Label></FormGroup></FormGroup></div>

var formNotes25 = <div>
<FormGroup tag="fieldset"><FormGroup check inline><Label check>
                        <Input type="radio" value='0' name="radio25" />{'0'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='1' name="radio25" />{'1'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='2' name="radio25"  />{'2'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='3' name="radio25" />{'3'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='4' name="radio25" />{'4'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='5' name="radio25"  />{'5'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='6' name="radio25" />{'6'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='7' name="radio25"  />{'7'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='8' name="radio25" />{'8'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='9' name="radio25" />{'9'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='10' name="radio25" />{'10'}
     </Label></FormGroup></FormGroup></div>

var formNotes31 = <div>
<FormGroup tag="fieldset"><FormGroup check inline><Label check>
                        <Input type="radio" value='0' name="radio31" />{'0'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='1' name="radio31" />{'1'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='2' name="radio31"  />{'2'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='3' name="radio31" />{'3'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='4' name="radio31" />{'4'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='5' name="radio31"  />{'5'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='6' name="radio31" />{'6'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='7' name="radio31"  />{'7'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='8' name="radio31" />{'8'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='9' name="radio31" />{'9'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='10' name="radio31" />{'10'}
     </Label></FormGroup></FormGroup></div>
  
  var formNotes32 = <div>
<FormGroup tag="fieldset"><FormGroup check inline><Label check>
                        <Input type="radio" value='0' name="radio32" />{'0'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='1' name="radio32" />{'1'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='2' name="radio32"  />{'2'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='3' name="radio32" />{'3'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='4' name="radio32" />{'4'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='5' name="radio32"  />{'5'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='6' name="radio32" />{'6'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='7' name="radio32"  />{'7'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='8' name="radio32" />{'8'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='9' name="radio32" />{'9'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='10' name="radio32" />{'10'}
     </Label></FormGroup></FormGroup></div>

var formNotes33 = <div>
<FormGroup tag="fieldset"><FormGroup check inline><Label check>
                        <Input type="radio" value='0' name="radio33" />{'0'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='1' name="radio33" />{'1'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='2' name="radio33" />{'2'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='3' name="radio33" />{'3'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='4' name="radio33" />{'4'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='5' name="radio33" />{'5'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='6' name="radio33" />{'6'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='7' name="radio33" />{'7'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='8' name="radio33" />{'8'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='9' name="radio33" />{'9'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='10' name="radi033" />{'10'}
     </Label></FormGroup></FormGroup></div>

var formNotes34 = <div>
<FormGroup tag="fieldset"><FormGroup check inline><Label check>
                        <Input type="radio" value='0' name="radio34" />{'0'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='1' name="radio34" />{'1'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='2' name="radio34" />{'2'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='3' name="radio34" />{'3'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='4' name="radio34" />{'4'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='5' name="radio34" />{'5'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='6' name="radio34" />{'6'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='7' name="radio34" />{'7'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='8' name="radio34" />{'8'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='9' name="radio34" />{'9'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='10' name="radio34" />{'10'}
     </Label></FormGroup></FormGroup></div>

var formNotes35 = <div>
<FormGroup tag="fieldset"><FormGroup check inline><Label check>
                        <Input type="radio" value='0' name="radio35" />{'0'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='1' name="radio35" />{'1'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='2' name="radio35" />{'2'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='3' name="radio35" />{'3'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='4' name="radio35" />{'4'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='5' name="radio35" />{'5'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='6' name="radio35" />{'6'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='7' name="radio35" />{'7'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='8' name="radio35" />{'8'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='9' name="radio35" />{'9'}
     </Label></FormGroup><FormGroup check inline><Label check>
                        <Input type="radio" value='10' name="radio35" />{'10'}
     </Label></FormGroup></FormGroup></div>


    return (
      <div className="container">
        <div className="col-md-16">
          <Card  className="Card-position">
            <Info_user {...dados}/>
            <CardBody>
              


 <h5><b>I – Dimensão Institucional – características que agregam valor e contribuem para o desenvolvimento da instituição.</b></h5>

<p><b>1</b>. Cumpre a carga horária de trabalho (seja no regime diarista, plantonista ou de escala) definido para sua função;</p>
  
      {formNotes11}

<p><b>2</b>. Preserva o patrimônio público, equipamentos, materiais e documentos institucionais independentes de estar sob sua guarda, mantendo sua integridade e boa aparência;</p>

      {formNotes12}


<p><b>3</b>. Sabe informar a relação hierárquica existente entre o seu setor e os demais setores da Unidade, assim como a divisão de atribuições entre eles;</p>

      {formNotes13}

      <div>{aux}</div>

<h5><b>II – Dimensão Funcional – Características que geram impacto nos processos e formas de trabalho do servidor.</b></h5>

<p><b>1</b>. Atende as orientações profissionais constante nas normas vigentes;</p>

         {formNotes21}


<p><b>2</b>. Utiliza a comunicação de forma compreensível, por meio de linguagem oral e escrita, como facilitadora do trabalho da equipe;</p>

         {formNotes22}
  

<p><b>3</b>. Cumpre a divisão de atividades evitando sobrecarga de trabalho para os demais colegas de setor;</p>

         {formNotes23}


<p><b>4</b>. Auxilia os colegas quando estes apresentam dificuldades para realizar as atividades do setor;</p>

         {formNotes24}


<p><b>5</b>. Atende e orienta as pessoas com respeito e cordialidade no cumprimento de suas funções e nos assuntos relativos à Instituição; </p>

         {formNotes25}
      

<h5><b>III – Dimensão Individual – Características que aparecem nas atitudes, comportamentos e são um diferencial do servidor.</b></h5>

<p><b>1</b>. Mantém o equilíbrio emocional diante das pressões e das situações estressantes do ambiente de trabalho;</p>

         {formNotes31}


<p><b>2</b>. Age de acordo com a legalidade, principalmente no que se refere à igualdade e imparcialidade no exercício de suas funções;</p>

         {formNotes32}


<p><b>3</b>. Apresenta suas dúvidas em relação à execução das atividades com antecedência para evitar erros ou retrabalhos.</p>

         {formNotes33}


<p><b>4</b>. Age em busca de negociação e acordo diante dos conflitos e dificuldades interpessoais vivenciados no trabalho.</p>

         {formNotes34}
      

<p><b>5</b>. Cumpre as orientações da chefia relativas à execução das atividades e funções do seu cargo e a gestão do setor.</p>

         {formNotes35}
      

  <hr/>
    <Button color="primary" value=''> Gravar</Button>{' '}
      <Button color="danger" value=''>Cancelar</Button>{' '}

      </CardBody>
    </Card>
  </div>
  </div>
    )}
  
}
  


export default avaliacao;
/*
<p>Itens adicionais para a auto-avaliação.</p>

<p>4. Mantém suas informações cadastrais e funcionais atualizadas perante os sistemas de informação da UFPB e Governo Federal (SIAPE, SIGRH entre outros);</p>
<p>5. Mantém atualizada, perante a UFPB, toda a documentação necessária referente ao seu afastamento (cessão, colaboração, exercício provisório entre outros).</p>


                  <p>Itens adicionais para a avaliação da chefia.</p>

<p>4. Dedica atenção em aprender a utilizar os sistemas de informação da instituição e que são necessários à execução do trabalho no setor;</p>
<p>5. Comunica para a chefia as dificuldades e limitações existentes no setor visando o bom andamento do trabalho.</p>
*/