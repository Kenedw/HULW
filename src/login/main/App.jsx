import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Login from './../login/Login';

const cadastrar = () => (
  <div>
      <h2>Tela Cadastrar</h2>
  </div>
);

const esqueci = () => (
  <div>
      <h2>Tela: Esqueci a senha</h2>
  </div>
)

const prox = () => (
  <div>
      <h2>Proxima tela</h2>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/cadastrar" component={cadastrar} />
          <Route path="/esqueciSenha" component={esqueci} />
          <Route path="/prox" component={prox} />
        </div>
      </Router>
    );
  }
}

export default App;
