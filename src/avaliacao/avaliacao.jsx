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

var id = "";
var idM = "";

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
      ,IP_USER_AVALIADO: 7,
      }
  }
  


  pegaDados(){

    var base64 = require('base-64')
    var utf8 = require('utf8')

    var encoded = (this.props.location.search).substring(1)
    idM = encoded;
    var bytes = base64.decode(encoded)
    id = utf8.decode(bytes)

    console.log(id)
  }

  componentWillMount(){
    this.colocarId();
  }

  handleChange(value) {
    this.setState({selectedValue: value});
  }

  voltar(){
    console.log("voltar");
    window.open("/userpage?"+idM,"_self");
  }



  gravar(){
    //salvando no banco
    //-> comando
    alert("Formulario salvo!")
    window.open("/userpage?"+idM,"_self");
  }

  render(){
    const IP_USER_AVALIADO = this.state.IP_USER_AVALIADO;
    var escreva1 = <div>
        <p><b>4</b>. Mantém suas informações cadastrais e funcionais atualizadas perante os sistemas de informação da UFPB e Governo Federal (SIAPE, SIGRH entre outros);</p>



           <p><b>5</b>. Mantém atualizada, perante a UFPB, toda a documentação necessária referente ao seu afastamento (cessão, colaboração, exercício provisório entre outros).</p>



   </div>;
    var escreva2 = <div>

        <p><b>4</b>. Dedica atenção em aprender a utilizar os sistemas de informação da instituição e que são necessários à execução do trabalho no setor;</p>

        <p><b>5</b>. Comunica para a chefia as dificuldades e limitações existentes no setor visando o bom andamento do trabalho.</p>

    </div>

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
    return (
      <div className="container">
        <div className="col-md-16">
          <Card  className="Card-position">
            <Info_user {...dados}/>
            <CardBody>
              



 <h5><b>I – Dimensão Institucional – características que agregam valor e contribuem para o desenvolvimento da instituição.</b></h5>

<p><b>1</b>. Cumpre a carga horária de trabalho (seja no regime diarista, plantonista ou de escala) definido para sua função;</p>

      {formNotes1}

<p><b>2</b>. Preserva o patrimônio público, equipamentos, materiais e documentos institucionais independentes de estar sob sua guarda, mantendo sua integridade e boa aparência;</p>

      {formNotes2}


<p><b>3</b>. Sabe informar a relação hierárquica existente entre o seu setor e os demais setores da Unidade, assim como a divisão de atribuições entre eles;</p>

      {formNotes3}


<div>
         {IP_USER_AVALIADO=== null ? (escreva1)
         :
         (escreva2)
         }
      </div>

<h5><b>II – Dimensão Funcional – Características que geram impacto nos processos e formas de trabalho do servidor.</b></h5>

<p><b>1</b>. Atende as orientações profissionais constante nas normas vigentes;</p>

         {formNotes4}


<p><b>2</b>. Utiliza a comunicação de forma compreensível, por meio de linguagem oral e escrita, como facilitadora do trabalho da equipe;</p>

         {formNotes5}


<p><b>3</b>. Cumpre a divisão de atividades evitando sobrecarga de trabalho para os demais colegas de setor;</p>

         {formNotes6}


<p><b>4</b>. Auxilia os colegas quando estes apresentam dificuldades para realizar as atividades do setor;</p>

         {formNotes7}


<p><b>5</b>. Atende e orienta as pessoas com respeito e cordialidade no cumprimento de suas funções e nos assuntos relativos à Instituição; </p>

         {formNotes8}


<h5><b>III – Dimensão Individual – Características que aparecem nas atitudes, comportamentos e são um diferencial do servidor.</b></h5>

<p><b>1</b>. Mantém o equilíbrio emocional diante das pressões e das situações estressantes do ambiente de trabalho;</p>

         {formNotes9}


<p><b>2</b>. Age de acordo com a legalidade, principalmente no que se refere à igualdade e imparcialidade no exercício de suas funções;</p>

         {formNotes10}


<p><b>3</b>. Apresenta suas dúvidas em relação à execução das atividades com antecedência para evitar erros ou retrabalhos.</p>

         {formNotes11}


<p><b>4</b>. Age em busca de negociação e acordo diante dos conflitos e dificuldades interpessoais vivenciados no trabalho.</p>

         {formNotes12}


<p><b>5</b>. Cumpre as orientações da chefia relativas à execução das atividades e funções do seu cargo e a gestão do setor.</p>

         {formNotes13}


  <hr/>
    <Button color="primary" onClick={this.gravar}> Gravar</Button>{' '}
      <Button color="danger" onClick={this.voltar}>Cancelar</Button>{' '}

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
