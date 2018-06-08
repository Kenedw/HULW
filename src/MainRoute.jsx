import React,{ Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Userpage from './userpage/UserPage.jsx';
import Head from './Head.js';
import Login from './login/Login';
import CadastroTec from './cadastrartec/CadastroTec0.jsx'
import Aval from './avaliacao/avaliacao'
import Aval2 from './avaliacao/avaliacaoprob'

const NotFound = () =>(
  <div>
    <h1>Pagina não encontrada, cidadão.</h1>
  </div>
);


const esqueci = () => (
  <div>
      <h2>Tela: Esqueci a senha</h2>
  </div>
)

class Rota extends Component {
  render() {
    return (
      <div>
        <Head />
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/cadastrar" component={CadastroTec} />
            <Route path="/esqueciSenha" component={esqueci} />
            <Route path="/userpage" exact component={Userpage} />
            <Route path="/avaliacao" component ={Aval}/>
            <Route path="/avalprob" component = {Aval2}/>
            <Route component={NotFound}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Rota;
