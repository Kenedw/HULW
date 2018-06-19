import React  from 'react';
import './../App.css';
import { Input, Form, Label, FormGroup, FormText,Button, Card, CardBody, CardSubtitle, CardText, Row, Col,   InputGroup, InputGroupAddon,  InputGroupButtonDropdown,  InputGroupDropdown,   Dropdown,  DropdownToggle,  DropdownMenu,  DropdownItem, ButtonDropdown} from 'reactstrap';
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
      IP_USER_AVALIADO: 7,
      unidades: [1, 2, 3, 4, 5,6,7,8,9,10],
      dt_Ano:2018,
      // id_Usuario_Avaliador:pros.id_Usuario_Avaliador,
      // id_Usuario_Avaliado:pros.id_Usuario_Avaliado,
      pergunta_1_1:"",
      pergunta_1_2:"",
      pergunta_1_3:"",
      pergunta_2_1:"",
      pergunta_2_2:"",
      pergunta_2_3:"",
      pergunta_3_1:"",
      pergunta_3_2:"",
      pergunta_3_3:"",
      pergunta_4_1:"",
      pergunta_4_2:"",
      pergunta_4_3:"",
      pergunta_5_1:"",
      pergunta_5_2:"",
      pergunta_5_3:"",
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
    // this.colocarId();
  }

  onChange = (evento) => {
    //this.setState({nome: evento.target.value});
    const state = Object.assign({}, this.state);
    const campo = evento.target.name;
    state[campo] = evento.target.value;
    this.setState(state);
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
      <div className="form-group">
        <Input type="select" name="pergunta_2_1" id="exampleSelect"
          value={this.state.unidade_pai} onChange={this.onChange}>
          <option></option>
          { this.state.unidades.map(unidade => <option value={unidade}>{unidade} </option>)}
        </Input>
      </div>
      <p><b>5</b>. Mantém atualizada, perante a UFPB, toda a documentação necessária referente ao seu afastamento (cessão, colaboração, exercício provisório entre outros).</p>
      <div className="form-group">
        <Input type="select" name="pergunta_2_2" id="exampleSelect"
          value={this.state.unidade_pai} onChange={this.onChange}>
          <option></option>
          { this.state.unidades.map(unidade => <option value={unidade}>{unidade} </option>)}
        </Input>
      </div>
    </div>;
    var escreva2 = <div>
      <p><b>4</b>. Dedica atenção em aprender a utilizar os sistemas de informação da instituição e que são necessários à execução do trabalho no setor;</p>
      <div className="form-group">

        <Input type="select" name="pergunta_2_1" id="exampleSelect"
          value={this.state.unidade_pai} onChange={this.onChange}>
          <option></option>
          { this.state.unidades.map(unidade => <option value={unidade}>{unidade} </option>)}
        </Input>
      </div>
      <p><b>5</b>. Comunica para a chefia as dificuldades e limitações existentes no setor visando o bom andamento do trabalho.</p>
      <div className="form-group">

        <Input type="select" name="pergunta_2_2" id="exampleSelect"
          value={this.state.unidade_pai} onChange={this.onChange}>
          <option></option>
          { this.state.unidades.map(unidade => <option value={unidade}>{unidade} </option>)}
        </Input>
      </div>
    </div>
    return (
      <div className="container">
        <div className="col-md-16">
          <Card  className="Card-position">
            <Info_user {...dados}/>
            <CardBody>

              <h5><b>I – Dimensão Institucional – características que agregam valor e contribuem para o desenvolvimento da instituição.</b></h5>

              <p><b>1</b>. Cumpre a carga horária de trabalho (seja no regime diarista, plantonista ou de escala) definido para sua função;</p>

              <div className="form-group">

                <Input type="select" name="pergunta_1_1" id="exampleSelect"
                  value={this.state.unidade_pai} onChange={this.onChange}>
                  <option></option>
                  { this.state.unidades.map(unidade => <option value={unidade}>{unidade} </option>)}
                </Input>
              </div>

              <p><b>2</b>. Preserva o patrimônio público, equipamentos, materiais e documentos institucionais independentes de estar sob sua guarda, mantendo sua integridade e boa aparência;</p>

              <div className="form-group">

                <Input type="select" name="pergunta_1_2" id="exampleSelect"
                  value={this.state.unidade_pai} onChange={this.onChange}>
                  <option></option>
                  { this.state.unidades.map(unidade => <option value={unidade}>{unidade} </option>)}
                </Input>
              </div>
              <p><b>3</b>. Sabe informar a relação hierárquica existente entre o seu setor e os demais setores da Unidade, assim como a divisão de atribuições entre eles;</p>
              <div className="form-group">

                <Input type="select" name="pergunta_1_3" id="exampleSelect"
                  value={this.state.unidade_pai} onChange={this.onChange}>
                  <option></option>
                  { this.state.unidades.map(unidade => <option value={unidade}>{unidade} </option>)}
                </Input>
              </div>


              <div>
                {IP_USER_AVALIADO === null ? (escreva1):(escreva2)}
              </div>

              <h5><b>II – Dimensão Funcional – Características que geram impacto nos processos e formas de trabalho do servidor.</b></h5>

              <p><b>1</b>. Atende as orientações profissionais constante nas normas vigentes;</p>

              <div className="form-group">

                <Input type="select" name="pergunta_2_3" id="exampleSelect"
                  value={this.state.unidade_pai} onChange={this.onChange}>
                  <option></option>
                  { this.state.unidades.map(unidade => <option value={unidade}>{unidade} </option>)}
                </Input>
              </div>


              <p><b>2</b>. Utiliza a comunicação de forma compreensível, por meio de linguagem oral e escrita, como facilitadora do trabalho da equipe;</p>

              <div className="form-group">

                <Input type="select" name="pergunta_3_1" id="exampleSelect"
                  value={this.state.unidade_pai} onChange={this.onChange}>
                  <option></option>
                  { this.state.unidades.map(unidade => <option value={unidade}>{unidade} </option>)}
                </Input>
              </div>


              <p><b>3</b>. Cumpre a divisão de atividades evitando sobrecarga de trabalho para os demais colegas de setor;</p>

              <div className="form-group">

                <Input type="select" name="pergunta_3_2" id="exampleSelect"
                  value={this.state.unidade_pai} onChange={this.onChange}>
                  <option></option>
                  { this.state.unidades.map(unidade => <option value={unidade}>{unidade} </option>)}
                </Input>
              </div>


              <p><b>4</b>. Auxilia os colegas quando estes apresentam dificuldades para realizar as atividades do setor;</p>

              <div className="form-group">

                <Input type="select" name="pergunta_3_3" id="exampleSelect"
                  value={this.state.unidade_pai} onChange={this.onChange}>
                  <option></option>
                  { this.state.unidades.map(unidade => <option value={unidade}>{unidade} </option>)}
                </Input>
              </div>


              <p><b>5</b>. Atende e orienta as pessoas com respeito e cordialidade no cumprimento de suas funções e nos assuntos relativos à Instituição; </p>

              <div className="form-group">

                <Input type="select" name="pergunta_4_1" id="exampleSelect"
                  value={this.state.unidade_pai} onChange={this.onChange}>
                  <option></option>
                  { this.state.unidades.map(unidade => <option value={unidade}>{unidade} </option>)}
                </Input>
              </div>


              <h5><b>III – Dimensão Individual – Características que aparecem nas atitudes, comportamentos e são um diferencial do servidor.</b></h5>

              <p><b>1</b>. Mantém o equilíbrio emocional diante das pressões e das situações estressantes do ambiente de trabalho;</p>

              <div className="form-group">

                <Input type="select" name="pergunta_4_2" id="exampleSelect"
                  value={this.state.unidade_pai} onChange={this.onChange}>
                  <option></option>
                  { this.state.unidades.map(unidade => <option value={unidade}>{unidade} </option>)}
                </Input>
              </div>


              <p><b>2</b>. Age de acordo com a legalidade, principalmente no que se refere à igualdade e imparcialidade no exercício de suas funções;</p>

              <div className="form-group">

                <Input type="select" name="pergunta_4_3" id="exampleSelect"
                  value={this.state.unidade_pai} onChange={this.onChange}>
                  <option></option>
                  { this.state.unidades.map(unidade => <option value={unidade}>{unidade} </option>)}
                </Input>
              </div>


              <p><b>3</b>. Apresenta suas dúvidas em relação à execução das atividades com antecedência para evitar erros ou retrabalhos.</p>

              <div className="form-group">

                <Input type="select" name="pergunta_5_1" id="exampleSelect"
                  value={this.state.unidade_pai} onChange={this.onChange}>
                  <option></option>
                  { this.state.unidades.map(unidade => <option value={unidade}>{unidade} </option>)}
                </Input>
              </div>


              <p><b>4</b>. Age em busca de negociação e acordo diante dos conflitos e dificuldades interpessoais vivenciados no trabalho.</p>

              <div className="form-group">

                <Input type="select" name="pergunta_5_2" id="exampleSelect"
                  value={this.state.unidade_pai} onChange={this.onChange}>
                  <option></option>
                  { this.state.unidades.map(unidade => <option value={unidade}>{unidade} </option>)}
                </Input>
              </div>


              <p><b>5</b>. Cumpre as orientações da chefia relativas à execução das atividades e funções do seu cargo e a gestão do setor.</p>

              <div className="form-group">

                <Input type="select" name="pergunta_5_3" id="exampleSelect"
                  value={this.state.unidade_pai} onChange={this.onChange}>
                  <option></option>
                  { this.state.unidades.map(unidade => <option value={unidade}>{unidade} </option>)}
                </Input>
              </div>

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
