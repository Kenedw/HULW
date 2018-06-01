import React  from 'react';
import './../App.css';
import { Input, Row, Col, Button, Card, CardBody, CardSubtitle} from 'reactstrap';


class cadastrotec extends React.Component {
  constructor(){
    super();
    this.state = {
      nome: "",
      cpf: "",
      email: "",
      senha: ""
    };
    this.onChange = (evento) => {
      this.setState({nome: evento.target.value});
      const state = Object.assign({}, this.state);
      const campo = evento.target.name;

      state[campo] = evento.target.value;

      this.setState(state);
      //if(campo === 'senha' && evento.target.value.length < 8 ){
      //alert(TestaCPF(state[campo]));
      console.log( evento.target.value.length)
      if(campo === 'cpf'){
        this.setState( {cpf: formatarCpf(evento.target.value)} ); // atualiza o valor do cpf formatado
      }
    };
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
                  <CardSubtitle>CPF: </CardSubtitle>
                  <Input  type="text"  className="form-control" name="cpf"
                    value={this.state.cpf} onChange={this.onChange} minLength='14' maxLength='14' required/>
                </div>

                <div className="form-group">
                  <CardSubtitle>Senha: </CardSubtitle>
                  <input type="password" className="form-control"  name="senha"
                    value={this.state.senha} onChange={this.onChange} minLength='6' required/>
                </div>
                <div>
                  <Button outline type="Submit" >Cadastrar</Button>
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

//{JSON.stringify(this.state)}

function formatarCpf(cpf){
  cpf = cpf.replace(/\D/g,"");
  cpf = cpf.replace(/(\d{3})(\d)/,"$1.$2");
  cpf = cpf.replace(/(\d{3})(\d)/,"$1.$2");
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
  return cpf;
}


export default cadastrotec;
