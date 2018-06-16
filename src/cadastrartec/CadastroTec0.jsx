import React, { Component } from 'react';
import './../App.css';
import { Input, Row, Col, Button,ButtonGroup, Card, CardBody, CardSubtitle, Label,FormGroup, CustomInput} from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import axios from 'axios'


const URL = 'https://hulw.herokuapp.com/'

class cadastrotec extends React.Component {
  constructor(){
    super();
    this.state = {
      //unidades :[],
      nome: "",
      cpf: "",
      email: "",
      senha: "",
      //chefe: false,
      //unidade: "",
      dataAdm: "",
      
    };

    this.handleInputChange = this.handleInputChange.bind(this);

    this.onChange = (evento) => {
      this.setState({nome: evento.target.value});
      const state = Object.assign({}, this.state);
      const campo = evento.target.name;

      state[campo] = evento.target.value;

      this.setState(state);
      //if(campo === 'unidade' &&  evento.target.value === ''){
       // console.log( evento.target.value.length)
      // alert("Sem comentario")
      //}
      

    };
    //this.onSubmit = (evento) => { // ver os dados a serem enviados no console
      this.handleSubmit = event => {
        event.preventDefault();
        var config = {
          headers: {'content-type': 'application/json'}
        };
        const usuario = {
          no_Pessoa: this.state.nome,
          cd_CPF: cpf2int(this.state.cpf),
          cd_Email: this.state.email,
          cd_Senha: this.state.senha,
         // chefe: this.state.chefe,
         // unidade: this.state.unidade,
         dt_Admissao: this.state.dataAdm+"T00:00:00.000Z",
        };
    
        axios.post(`${URL}usuario`,JSON.stringify(usuario), config) //JSON.stringify(usuario)
          .then(res => { 
            //console.log(res.Object.data);
            console.log(res.data.msg);
            alert(res.data.msg) // alerta sucesso ao cadastrar
            window.location.reload() // atualiza a página caso sucesso
          })
          .catch(error => {
            console.log(error.response.data.error.message);
            alert(error.response.data.error.message) // alerta o erro ao submit
          });
      };

  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.checked;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  
  componentDidMount() {
    axios.get(`${URL}unidade`)                    //'http://localhost:3003/api/todos`)
      .then(res => {
        const unidades = res.data;
        this.setState({ unidades });
      })
    }


  render(){
    return (
      <div className="container">
        <div className="col-md-16">
          <Card  className="Card-position">
            <CardBody>

              <form onSubmit={this.handleSubmit}>
                <h3>Cadastro</h3>

                <div className="form-group">
                  <CardSubtitle>Nome: </CardSubtitle>
                  <Input  type="text"  className="form-control"  name="nome"
                    value={this.state.nome} onChange={this.onChange} required/>
                </div>

                <div className="form-group">
                  <CardSubtitle>Email: </CardSubtitle>
                  <input type="email" className="form-control"  name="email"
                    value={this.state.email} onChange={this.onChange} required/>
                </div>


                <FormGroup>
                  <Label for="exampleDate">Data de admissão</Label>
                  <Input type="date" name="dataAdm" placeholder="date placeholder" value={this.state.dataAdm} onChange={this.onChange} required/>
                </FormGroup>

                <div className="form-group">
                  <CardSubtitle>CPF: </CardSubtitle>
                  <Input  type="text"  className="form-control" name="cpf"
                    value={formatarCpf(this.state.cpf)} onChange={this.onChange} minLength='14' maxLength='14' placeholder="000.000.000-00" required/>
                </div>
             
                <div className="form-group">
                  <CardSubtitle>Senha: </CardSubtitle>
                  <input type="password" className="form-control"  name="senha"
                    value={this.state.senha} onChange={this.onChange} minLength='6' required/>
                </div>

                
                <div>
                  <Button onSubmit={this.handleSubmit} outline type="Submit" >Cadastrar</Button>
                  <Button outline href="/" className="a-fix">Voltar</Button>
                </div>
               
              </form>
            </CardBody>
          </Card>
        </div>
      </div>

    )

  }
}

// TODO: checkbox referente ao chefe

//<CustomInput type="checkbox" id="1" label="Chefe" onChange={this.onChange} value={this.state.chefe} name="chefe"/>

//           <Input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked} >One</Input>
/*
<div>
                <label>
                <input name="chefe" type="checkbox" checked={this.state.chefe} onChange={this.handleInputChange} 
                />
                Chefe 
                </label>
                </div>


                <div className="form-group">
                    <Label >Unidade</Label>
                <Input type="select" name="unidade" id="exampleSelect"
                    value={this.state.unidade} onChange={this.onChange}>
                    <option></option>
                    { this.state.unidades.map(unidade => <option>{unidade.de_UNIDADE}</option>)}

                </Input>
                </div>

*/

//{JSON.stringify(this.state)}

function formatarCpf(cpf){
  cpf = cpf.replace(/\D/g,"");
  cpf = cpf.replace(/(\d{3})(\d)/,"$1.$2");
  cpf = cpf.replace(/(\d{3})(\d)/,"$1.$2");
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
  return cpf;
}

function cpf2int(cpf){
  cpf = cpf.replace(/[^0-9]+/g,'');

  return cpf;
}


export default cadastrotec;
