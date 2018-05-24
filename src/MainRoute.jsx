import React,{ Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import App from './App.jsx';
import Head from './Head.js';

const NotFound = () =>(
  <div>
    <h1>Pagina não encontrada, cidadão.</h1>
  </div>
);

class Rota extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path='*' component={NotFound}/>
        </Switch>
      </Router>
    );
  }
}

export default Rota;
// <!-- Links do login
// <Route exact path="/" component={Login} />
// <Route path="/cadastrar" component={cadastrar} />
// <Route path="/esqueciSenha" component={esqueci} />
// -->
// <!-- Links da userpage -->
// <Route path="/userpage" component={userpage} />
