import React,{ Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Userpage from './userpage/UserPage.jsx';
import Head from './Head.js';
import Login from './login/Login';
import AdminPage from './adminpage/AdminPage.jsx'
import Aval from './avaliacao/avaliacao'
import Aval2 from './avaliacao/avaliacaoprob'
import Cadastro from './cadastrartec/CadastroTec0'
import Unidade from './unidade/unidade'
import PesqUnidade from './unidade/pesqUnidade'
import Vincular from './unidade/vincular'
import notfount from './paginaNaoEnc.png';

const NotFound = () =>(
  <div>
    <img src={notfount} width="100%"/>
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
            <Route exact path="/"        component = {Login} />
            <Route path="/administrador" component = {AdminPage} />
            <Route path="/esqueciSenha"  component = {esqueci} />
            <Route path="/userpage"      component = {Userpage} />
            <Route path="/avaliacao"     component = {Aval}/>
            <Route path="/avalprob"      component = {Aval2}/>
            <Route path="/cadastroTec"   component = {Cadastro} />
            <Route path="/unidade"       component = {Unidade} />
            <Route path="/pesqUnidade"   component = {PesqUnidade}/>
            <Route path="/vincular"      component = {Vincular}/>
            <Route component={NotFound}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Rota;
