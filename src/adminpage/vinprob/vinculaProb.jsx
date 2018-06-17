import React, { Component } from 'react';
import '../../App.css';
import { Input, Button, Card, CardBody, CardSubtitle, CardText, Row, Col, Collapse, FormGroup, Form} from 'reactstrap';
import axios from 'axios';
import Lista from './probList';
import Decodificar from '../decodifica';

var clickInfo = false;
class admin extends Component {
  constructor(){
    super();
    this.state = {
      cpf: "",
      open: false,
      response: [],
      token:"XyZY123789KjlH",
      dataProb: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);

    this.onChange = (evento) => {
      this.setState({nome: evento.target.value});
      const state = Object.assign({}, this.state);
      const campo = evento.target.name;

      state[campo] = evento.target.value;

      this.setState(state);
      if(campo === 'cpf'){
        this.setState( {cpf: formatarCpf(evento.target.value)} ); // atualiza o valor do cpf formatado
      }
      if(campo === 'dataProb'){
        this.setState( {dataProb: evento.target.value} );
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

  handleInputChange(event) {
    // const target = event.target;
    // const value = target.checked;
    // const name = target.name;
    //
    // this.setState({
    //   [name]: value
    // });
    console.log("oioioioioioi");
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
                  <label>Pesquisar por CPF ou DATA de admissão: </label>
                  <Form inline>
                    <Input type="text" className="form-control" name="cpf"
                      value={this.state.cpf} onChange={this.onChange} placeholder="000.000.000-00"
                      minLength='14' maxLength='14'/>
                    <Input type="date" name="dataProb" placeholder="date placeholder" value={this.state.dataProb} onChange={this.onChange}/>
                    <Button outline className="a-fix" onClick={()=>{
                    var result = "@";
                    if(this.state.cpf.length == 14){result ='cpf/' + cpf2int(this.state.cpf);}
                    else if(this.state.dataProb.length == 10){result = this.state.dataProb;}
                    axios.get('https://hulwteste.herokuapp.com/usuario/' + result )
                      .then((response) => {
                        this.setState({response: response.data});
                        this.setState({open: true });
                      }).catch((error) => {
                        this.setState({open: false });
                      });
                      clickInfo = true;
                    }}>Pesquisar</Button>

                  </Form>
                </div>
              <Collapse isOpen={this.state.open}>
                {clickInfo === true && <div> <Lista list={this.state.response}/> </div>}
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
