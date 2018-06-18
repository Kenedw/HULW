import React from 'react'
import './Login.css'
import newLogin from './actions/validation'

class Login extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      user: '',
      pass: '',

    };
    this.handleChangeUser = this.handleChangeUser.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);
    this.handleSubmit     = this.handleSubmit.bind(this);
    this.verificar        = this.verificar.bind(this);
  }

  handleChangeUser(event) {
    this.setState( {user: formatarCpf(event.target.value)} ); // atualiza o valor do cpf formatado
  }

  handleChangePass(event) {
    this.setState({ pass: event.target.value });
  }

  handleSubmit(event) {

    event.preventDefault();
  }

  async verificar(){
    if(this.state.user === '' || this.state.pass === '' ){
      alert('Por favor, preencha os campos!')
    }
    else{
      console.log(await newLogin(this.state.user,this.state.pass));
      /*var resposta = newLogin(this.state.user,this.state.pass);
      if(resposta === 0){
        alert('Usuário e/ou senha digitados incorretamente!');
        //
      }
      else if(resposta === 1){
        console.log("entrou como usuario comum")
        /*var base64 = require('base-64')
        var utf8 = require('utf8')

        var usuar = this.state.user

        var cpfLimpo = usuar.substring(0,3) + usuar.substring(4,7) + usuar.substring(8,11) + usuar.substring(12,14)

        console.log('https://hulw.herokuapp.com/usuario/cpf/' + cpfLimpo)

        fetch('https://hulw.herokuapp.com/usuario/cpf/' + cpfLimpo)
        .then((response) => response.json())
        .then((responseJson) => {

          var id = responseJson.id_Usuario;
          console.log(responseJson.id_Usuario);

          var bytes = utf8.encode(""+ id)
          var encoded = base64.encode(bytes)  
          
          console.log(encoded);

          window.open("/userpage?"+encoded,"_self");


        }).catch((error) => {
          console.log('nao encontrou o usuario!!!');
        })
      }else if (resposta === 2){
        console.log("entrou como usuario CHEFE")

      }else if (resposta === 3){
        console.log("entrou como administrador")
        //tela adm telaADM
        //window.open("/telaADM","_self");
      }else {
        console.log('nao salvou o estado, apareceu para mim: ' + resposta);
      }*/
    }

  }

  criarUser(){
    window.open("/telaCriarUser","_self");
  }

  render(){
    return (

      <div>
        <div id="login">
          <form name='form-login' onSubmit={this.handleSubmit}>
            <h3>Login</h3>
            <span className="fontawesome-user"></span>
            <input type="text-number" value={this.state.user} minLength='14' maxLength='14' placeholder="CPF" name="CPF" onChange={this.handleChangeUser}/>
            <span className="fontawesome-lock"></span>
            <input type="password" value={this.state.pass} placeholder="Senha" onChange={this.handleChangePass}/>
            <div>
              <a href="/esqueciSenha">Esqueci a senha</a>
            </div>
            <input type="submit" value="Login" onClick={this.verificar} />
          </form>
        </div>
      </div>

    )
  }
}
function formatarCpf(cpf){
  cpf = cpf.replace(/\D/g,"");
  cpf = cpf.replace(/(\d{3})(\d)/,"$1.$2");
  cpf = cpf.replace(/(\d{3})(\d)/,"$1.$2");
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
  return cpf;
}
export default Login
