import React, { Component } from 'react';
import './../App.css';
import { Input, Button, Card, CardBody, CardSubtitle, CardText, Row, Col, Collapse} from 'reactstrap';
import axios from 'axios';
import Lista from './todoList.jsx';
import Pesquisa from '../unidade/pesqUnidade'
import Decodificar from './decodifica'

const dados = {
  usuario: {
    NOME: "Zezinho Administrador da Silva",
    CPF:  "123.456.789-00",
    EMAIL: "zezinho.admin@boy.com",
  }
};

class Info_adm extends Component {

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


var clickInfo = false;
class admin extends Component {
  constructor(){
    super();
    this.state = {
      cpf: "",
      open: false,
      response: [],
      token:"XyZY123789KjlH"
    };

    this.onChange = (evento) => {
      this.setState({nome: evento.target.value});
      const state = Object.assign({}, this.state);
      const campo = evento.target.name;

      state[campo] = evento.target.value;

      this.setState(state);
      if(campo === 'cpf'){
        this.setState( {cpf: formatarCpf(evento.target.value)} ); // atualiza o valor do cpf formatado
      }
    };
  }
  componentDidMount() {
    clickInfo = false;
  }

  pegaDados(){
    var dados_url = Decodificar((this.props.location.search).substring(1))

    var cpfAdmin = (dados_url).substring(0,11);
    alert(cpfAdmin);
    var token_url =  (dados_url).substring(11);
    if(token_url !== ""){
      this.setState({token: token_url})
      alert(token_url);
    }else{
      alert(this.state.token)
    }
    
   // var bytes = base64.decode(decodifica);
    //var cpfs = utf8.decode(bytes);
    //alert(cpfs);
    /*
    var cpfAdmin = (cpfs).substring(11,23) // salva o segundo CPF referente ao ADMIN
    //var bytes = base64.decode(encoded)
    var cpfEditar = (cpfs).substring(0,11) //utf8.decode(bytes) // CPF para editar/cadastrar
    this.setState({cpf_Admin: cpfAdmin});
    if(cpfEditar !== ""){
     // alert(cpfEditar)
     // alert(cpfAdmin)
      
      axios.get(`${URL}usuario/cpf/`+cpfEditar)                    //'http://localhost:3003/api/todos`)
      .then(res => {
        const usuarios = res.data;
        this.setState({ usuarios });
        this.setState({id_usuario: usuarios.id_Usuario, flagEditar: true, cpf: usuarios.cd_CPF,nome: usuarios.no_Pessoa, email: usuarios.cd_Email,dataAdm: (usuarios.dt_Admissao).substring(0,10)})
      })
    }//else{
   // alert("NAO TEM NADA");
    //}
    */
  }

  componentWillMount() {

    this.pegaDados();
  }



  render(){
    return (
      <div className="container">
        <div className="col-md-16">
          <Card  className="Card-position">
            <CardBody>
              <form>
                <h3>Administrador</h3>
                <div>
                  <Info_adm {...dados}/>
                </div>
                <div className="form-group">
                  <p></p>
                  <CardSubtitle>Pesquisar CPF: </CardSubtitle>
                  <Input  type="text"  className="form-control" name="cpf"
                    value={this.state.cpf} onChange={this.onChange} minLength='14' maxLength='14' />
                </div>
                <div>
                  <Button outline onClick={()=> {axios.get('https://hulw.herokuapp.com/usuario/cpf/' + cpf2int(this.state.cpf) )
                    .then((response) => {
                      this.setState({response: response.data});
                      this.setState({open: true });
                    })
                    .catch((error) => {
                      this.setState({open: false });
                      if(error.response.status == 404){
                        alert("Usuário não cadastrado!")
                        window.open("/cadastroTec","_self");
                      }
                    });
                    clickInfo = true;
                  }}>Cadastrar/Pesquisar</Button>
              </div>
            </form>
            <Collapse isOpen={this.state.open}>
              {clickInfo === true &&
                <div>
                  <Lista list={this.state.response} cpfAdmin={cpf2int(dados.usuario.CPF)}/>
                </div>
              }
            </Collapse>
          </CardBody>
        </Card>
              <Pesquisa cpf_adm={dados.usuario.CPF} token={this.state.token}/>
      </div>
    </div>
  )
}}


function cpf2int(cpf){
  cpf = cpf.replace(/[^0-9]+/g,'');

  return cpf;
}


function formatarCpf(cpf){
  cpf = cpf.replace(/\D/g,"");
  cpf = cpf.replace(/(\d{3})(\d)/,"$1.$2");
  cpf = cpf.replace(/(\d{3})(\d)/,"$1.$2");
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
  return cpf;
}


export default admin;
