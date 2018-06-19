import React, { Component } from 'react';
import '../../App.css';
import { Input, Button, Card, CardBody, CardSubtitle, CardText, Row, Col, Collapse, FormGroup, Form} from 'reactstrap';
import axios from 'axios';
import Lista from './probList';
import Decodificar from '../decodifica';

const URL = 'https://hulw.herokuapp.com/';
var token = {
  headers:
  {
    'cache-control': 'no-cache',
    'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIsImNwZiI6IjEwNDEwNDEwNDEwIiwiaWF0IjoxNTI5MzM5ODE0LCJleHAiOjE1Mjk0MjYyMTR9.7ZjQ0S0ZOAezz3PGYQo0uzPLajf3YftpviyFQplKiqk',
    accept: 'application/json',
    'content-type': 'application/json'
  }
};

var clickInfo = false;
class admin extends Component {
  constructor(){
    super();
    this.state = {
      cpf: "",
      open: false,
      response: [],
      dataProb: "",
      dataPesq: "",
      // CheckProb: false,
    };
    // this.handleInputChange = this.handleInputChange.bind(this);

    this.onChange = (evento) => {
      this.setState({nome: evento.target.value});
      const state = Object.assign({}, this.state);
      const campo = evento.target.name;
      state[campo] = evento.target.value;

      this.setState(state);
      if(campo === 'cpf'){
        this.setState( {cpf: formatarCpf(evento.target.value)} ); // atualiza o valor do cpf formatado
      }
      if(campo === 'dataPesq'){
        this.setState( {dataPesq: evento.target.value} );
      }
    };
  }
  componentDidMount() {
    clickInfo = false;
  }

  pegaDados(){
    var token_url =  (this.props.location.search).substring(1);
    if(token_url !== ""){
      this.setState({token: token_url})
    }
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
              <h3>Vincular ao periodo probatorio</h3>
              <div className="form-group">
                <p></p>
                <label>Pesquisar por CPF ou DATA de admissão, caso necessário use a data do probatorio(opcional)</label>
                <Form inline>
                  <Input type="text" className="form-control a-fix" name="cpf"
                    value={this.state.cpf} onChange={this.onChange} placeholder="CPF"
                    minLength='14' maxLength='14'/>
                  <Input type="date" className="form-control a-fix" name="dataPesq" placeholder="date placeholder" alt="data de admissão" value={this.state.dataPesq} onChange={this.onChange}/>
                  {/*JSON.stringify(this.state) DEBUG*/}
                  <Input type="text"className="form-control a-fix" name="dataProb" placeholder="YYYY" maxLength="4" value={this.state.dataProb} onChange={this.onChange}/>
                  <Button outline className="a-fix" onClick={()=>{
                      var result = "@";
                      if(this.state.cpf.length == 14){result ='cpf/' + cpf2int(this.state.cpf);}
                      else if(this.state.dataPesq.length == 10){result = 'data/' + this.state.dataPesq;}
                      axios.get(`${URL}usuario/` + result, token )
                      .then((response) => {
                        // console.log(response.data);
                        this.setState({response:response.data});
                        this.setState({open: true });
                      }).catch((error) => {
                        console.log(error);
                        this.setState({open: false });
                      });
                      clickInfo = true;
                    }}>Pesquisar</Button>
                  </Form>
                </div>
                <Collapse isOpen={this.state.open}>
                  {clickInfo === true && <div> <Lista list={this.state.response} dataProb={this.state.dataProb} token={token}/> </div>}
                </Collapse>
              </CardBody>
            </Card>
          </div>
        </div>
      )
    }
  }

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
