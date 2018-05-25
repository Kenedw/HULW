import React from 'react'
import './Login.css'
import newLogin from './actions/validation'

class Login extends React.Component{

    constructor(props){
        super(props);
        this.state            = {user: '', pass: ''};
        this.handleChangeUser = this.handleChangeUser.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleSubmit     = this.handleSubmit.bind(this);
        this.verificar        = this.verificar.bind(this);
    }

    handleChangeUser(event) {
        this.setState({ user: event.target.value });
    }

    handleChangePass(event) {
        this.setState({ pass: event.target.value });
    }

    handleSubmit(event) {

        event.preventDefault();
    }

    verificar(){
        if(this.state.user === '' || this.state.pass === '' ){
            alert('Por favor, preencha os campos!')
        }
        else{
            if(!newLogin(this.state.user,this.state.pass)){
                alert('Usuário e/ou senha digitados incorretamente!');
                //
            }
            else{
                window.open("/userpage","_self");
            }
        }

    }

    render(){
        return (

            <div>
                <div id="login">
                    <form name='form-login' onSubmit={this.handleSubmit}>
                        <h3>Login</h3>
                        <span className="fontawesome-user"></span>
                        <input type="number" value={this.state.user} placeholder="CPF" onChange={this.handleChangeUser}/>
                        <span className="fontawesome-lock"></span>
                        <input type="password" value={this.state.pass} placeholder="Senha" onChange={this.handleChangePass}/>
                        <div>
                            <a href="/cadastrar">Criar Conta</a>
                            <a href="/esqueciSenha">Esqueci a senha</a>
                        </div>
                        <input type="submit" value="Login" onClick={this.verificar} />
                    </form>
                </div>
            </div>

        )
    }
}

export default Login
