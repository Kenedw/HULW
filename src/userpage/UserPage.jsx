import React, { Component } from 'react';
import './../App.css';
import { Container, Row, Col, Button, Table, Card, CardText, CardBody, CardSubtitle} from 'reactstrap';
import {Token} from '../login/Login';

var finis = false;

var location = "";

const pegarUnidade = async (id) =>{
  
  const response = await fetch('http://hulw.herokuapp.com/localizacao/usuario/'+id,{
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "x-access-token": Token()
    }
  });
  const json = await response.json();

  var idUnidade = json[0].id_Unidade

  const responseU = await fetch('https://hulw.herokuapp.com/unidade/'+idUnidade,{
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "x-access-token": Token()
    }
  });
  const jsonU = await responseU.json();

  return ({jsonU, json});
}


const pegaDados = async () => {

  var token = Token();

  const response = await fetch('https://hulw.herokuapp.com/auth/me/',{
      method: 'GET',
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "x-access-token": Token()
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

const pegarAvaliacoes = async (idU, nomeU, token, chefe, idUnidade) => {

  if (chefe === "" || chefe === undefined){ 
    chefe = false;
  }
  
  //////////////////////////////////////////////////////////////////////
  ////                  DESEPENHO                                 //////
  //////////////////////////////////////////////////////////////////////

  const response = await fetch('https://hulw.herokuapp.com/avaliacao/desempenho',{
      method: 'GET',
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "x-access-token": Token()
      }
  });
  const json = await response.json();
  var tam = json.length;

  var respostaDesempenho;

  if(!chefe){
    var avaliouDesempenho = false;
    //procurando no banco de avaliacoes, se ele avaliou ele mesmo
    for(var i = 0; i < tam; i++){
      if(idU === json[i].id_Usuario_Avaliador && idU === json[i].id_Usuario_Avaliado ){
        avaliouDesempenho = true;
      }
    }

    if (!avaliouDesempenho){
      respostaDesempenho = [{
        id: idU,
        ano: "2018",
        nome: nomeU,
        tipo: "Desempenho",
        estado: "Pendente"
      }]
    }else{
      respostaDesempenho = [{
        id: idU,
        ano: "2018",
        nome: nomeU,
        tipo: "Desempenho",
        estado: "Avaliado"
      }]
    }

  }else{

    //pegar todos pertecende a sua unidade
    const responseUni = await fetch('https://hulw.herokuapp.com/localizacao/unidade/'+idU,{
      method: 'GET',
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "x-access-token": Token()
      }
    });
    const jsonUni = await responseUni.json();

    var tamUsuariosNaUnidade = jsonUni.length;
    
    var auxUni = [];
    var auxiliar = [];
    var avaliouDesempenho = false;

    
    for(var i =0; i < tamUsuariosNaUnidade; i++){
      avaliouDesempenho = false;

      for(var j = 0; j < tam; j++){
        if(idU === json[j].id_Usuario_Avaliador && jsonUni[i].id_Usuario === json[j].id_Usuario_Avaliado ){
          avaliouDesempenho = true;
        }
      }

      const getNomeUser = await fetch('http://hulw.herokuapp.com/usuario/'+jsonUni[i].id_Usuario,{
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "x-access-token": Token()
        }
      });
      const nomeUserJson = await getNomeUser.json();

      if (!avaliouDesempenho){
        auxiliar = [{
          id: jsonUni[i].id_Usuario,
          ano: "2018",
          nome: nomeUserJson.no_Pessoa,
          tipo: "Desempenho",
          estado: "Pendente"
        }]
      }else{
        auxiliar = [{
          id: jsonUni[i].id_Usuario,
          ano: "2018",
          nome: nomeUserJson.no_Pessoa,
          tipo: "Desempenho",
          estado: "Avaliado"
        }]
      }

      auxUni = [...auxUni, ...auxiliar]

      
    }
    respostaDesempenho = [...auxUni]
  }

  //////////////////////////////////////////////////////////////////////
  ////                  PROBATORIO                               //////
  //////////////////////////////////////////////////////////////////////



  const responseP = await fetch('https://hulw.herokuapp.com/avaliacao/probatorio',{
      method: 'GET',
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "x-access-token": Token()
      }
  });
  const jsonP = await responseP.json();

  tam = jsonP.length;

  var respostaProbatoria;

  if(!chefe){
    var avaliouProbatorio = false;
    //procurando no banco de provatoria, se ele avaliou ele mesmo
    for(var i = 0; i < tam; i++){
      if(idU === jsonP[i].id_Usuario_Avaliador && idU === jsonP[i].id_Usuario_Avaliado ){
        avaliouProbatorio = true;
      }
    }

    if (!avaliouDesempenho){
      respostaProbatoria = [{
        id: idU.toString + '_1',
        ano: "2018",
        nome: nomeU,
        tipo: "Probatoria",
        estado: "Pendente"
      }]
    }else{
      respostaProbatoria = [{
        id: idU,
        ano: "2018",
        nome: nomeU,
        tipo: "Probatoria",
        estado: "Avaliado"
      }]
    }

  }else{

    //pegar todos pertecende a sua unidade
    const responseUni = await fetch('https://hulw.herokuapp.com/localizacao/unidade/'+idU,{
      method: 'GET',
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "x-access-token": Token()
      }
    });
    const jsonUni = await responseUni.json();

    var tamUsuariosNaUnidade = jsonUni.length;
    
    var auxUni = [];
    var auxiliar = [];
    var avaliouDesempenho = false;

    
    for(var i =0; i < tamUsuariosNaUnidade; i++){
      avaliouDesempenho = false;

      for(var j = 0; j < tam; j++){
        if(idU === jsonP[j].id_Usuario_Avaliador && jsonUni[i].id_Usuario === jsonP[j].id_Usuario_Avaliado ){
          avaliouDesempenho = true;
        }
      }

      const getNomeUser = await fetch('http://hulw.herokuapp.com/usuario/'+jsonUni[i].id_Usuario,{
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "x-access-token": Token()
        }
      });
      const nomeUserJson = await getNomeUser.json();

      if (!avaliouDesempenho){
        auxiliar = [{
          id: jsonUni[i].id_Usuario,
          ano: "2018",
          nome: nomeUserJson.no_Pessoa,
          tipo: "Probatoria",
          estado: "Pendente"
        }]
      }else{
        auxiliar = [{
          id: jsonUni[i].id_Usuario,
          ano: "2018",
          nome: nomeUserJson.no_Pessoa,
          tipo: "Probatoria",
          estado: "Avaliado"
        }]
      }

      auxUni = [...auxUni, ...auxiliar]
    }
    respostaProbatoria = [...auxUni]
  }

  //////////////////////////////////////////////////////

  var result = [...respostaDesempenho, ...respostaProbatoria];
  return result;
}

export class Userpage extends Component {

  constructor(){
    super();
    this.state = {
      CPF: "",
      NOME: "",
      EMAIL: "",
      UNIDADE: "",
      IDUNIDADE: "",
      ID: "",
      TOKEN: "",
      CHEFE: "",
      DADOS: []
    }
  }

  async componentWillMount() {

    location = await this.props.location.search;
    
    var resposta = await pegaDados();
    this.setState({TOKEN: resposta.token});
    this.setState({NOME: resposta.nome});
    this.setState({EMAIL: resposta.email});
    this.setState({ID: resposta.id});
    this.setState({CPF: resposta.cpfPontos});

    resposta = await pegarUnidade(this.state.ID);
    if (resposta === undefined){
      console.log("nao foi definido a unidade para esse usuario");
      this.setState({UNIDADE: ""});
      this.setState({CHEFE: ""});
      this.setState({DADOS: []})
    }else{
      
      this.setState({UNIDADE: resposta.jsonU.de_UNIDADE});
      this.setState({IDUNIDADE: resposta.jsonU.id_Unidade});
      this.setState({CHEFE: resposta.json[0].is_Chefe});

      resposta = await pegarAvaliacoes(this.state.ID, this.state.NOME, this.state.TOKEN, this.state.CHEFE, this.state.IDUNIDADE);
      this.setState({DADOS: resposta})
    }

  }

  render() {


    if(location !== ""){
      return (
        <div className="App">
          <Container>
            <Col>
              <Row>
                <Col>
                  <Info_pessoa usuario={this.state}/>
                  <Tabela avaliacao={this.state.DADOS}/>
                </Col>
              </Row>
              <Botao/>
            </Col>
          </Container>
        </div>
      );
    }else{
      return (<div>Carregando....</div>);
    }
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
        <Linha dados={this.props.avaliacao.DADOS}/>
      </Table>
    );
  }
}

var token = "a";
var id = "";

class Linha extends Component {

  constructor(){
    super();
    this.state = {
      ID: "",
      CHEFE: "",
      TOKIN: "",
      IDUNIDADE: "",
      DADOS: []
    }
  }

  irPaginaAvaliacao(idAvaliado){
    window.open("/avaliacao?" + token + "&" + id + "&" + idAvaliado,"_self");
  }

  async componentWillMount () {

    var resposta = await pegaDados(); //token, nome, id
    await this.setState({TOKIN: resposta.token});
    await this.setState({NOME: resposta.nome});
    await this.setState({ID: resposta.id});

    token = this.state.TOKIN
    id = this.state.ID;
    resposta = await pegarUnidade(this.state.ID);
    if (resposta === undefined){
      console.log("nao foi definido a unidade para esse usuario");
      this.setState({UNIDADE: ""});
      this.setState({CHEFE: ""});
      this.setState({DADOS: []})
    }else{
      await this.setState({IDUNIDADE: resposta.jsonU.id_Unidade});
      //var chefeUnidade = await pegaChefe(this.state.ID, this.state.TOKEN, this.state.IDUNIDADE);
      this.setState({CHEFE: resposta.json[0].is_Chefe});

      resposta = await pegarAvaliacoes(this.state.ID, this.state.NOME, this.state.TOKIN, this.state.CHEFE, this.state.IDUNIDADE);
      this.setState({DADOS: resposta})
    }
  }

  render() {

    if(this.state.DADOS.length !== 0){
    return (
      <tbody>
        {this.state.DADOS.map((val) =>
          <tr key={val.id}>
            <td scope="row">{val.ano}</td>
            <td>{val.nome}</td>
            <td>{val.tipo}</td>
            { val.estado === "Avaliado"           && <td className="btn-success">{val.estado}</td> }
            { val.estado === "Agardando Superior" && <td className="btn-warning">{val.estado}</td> }
            { val.estado === "Pendente"           && <td className="btn-danger" onClick={() => this.irPaginaAvaliacao(val.id)}> {val.estado}</td> }

          </tr>
        )}
      </tbody>
    );
    }
    else{
      return (<div>Carregando....</div>);
    }
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
