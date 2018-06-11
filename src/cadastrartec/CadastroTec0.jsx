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
      unidades :[],
      nome: "",
      cpf: "",
      email: "",
      senha: "",
      chefe: false,
      unidade: "",
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
    this.onSubmit = (evento) => { // ver os dados a serem enviados no console
      evento.preventDefault();
      console.log( this.state)
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



  handleAdd(){
    const description = this.state.description
    axios.post(URL, {description})
        .then(resp => this.refresh())
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

              <form>
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

                <div className="form-group">
                    <Label >Unidade</Label>
                <Input type="select" name="unidade" id="exampleSelect"
                    value={this.state.unidade} onChange={this.onChange} required>
                    <option></option>
                    { this.state.unidades.map(unidade => <option>{unidade.de_UNIDADE}</option>)}

                </Input>
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
                <label>
                <input name="chefe" type="checkbox" checked={this.state.chefe} onChange={this.handleInputChange} 
                />
                Chefe 
                </label>
                </div>

                <div>
                  <Button onClick={this.onSubmit} outline type="Submit" >Cadastrar</Button>
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


//{JSON.stringify(this.state)}

function formatarCpf(cpf){
  cpf = cpf.replace(/\D/g,"");
  cpf = cpf.replace(/(\d{3})(\d)/,"$1.$2");
  cpf = cpf.replace(/(\d{3})(\d)/,"$1.$2");
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
  return cpf;
}


export default cadastrotec;
