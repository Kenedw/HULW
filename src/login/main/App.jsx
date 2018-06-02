import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Login from './../login/Login';

const esqueci = () => (
  <div>
      <h2>Tela: Esqueci a senha</h2>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/esqueciSenha" component={esqueci} />
        </div>
      </Router>
    );
  }
}

export default App;
