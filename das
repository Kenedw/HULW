[1mdiff --git a/public/index.html b/public/index.html[m
[1mindex b6c780c..d51fa16 100644[m
[1m--- a/public/index.html[m
[1m+++ b/public/index.html[m
[36m@@ -2,6 +2,7 @@[m
 <html lang="en">[m
   <head>[m
     <meta charset="utf-8">[m
[32m+[m[32m    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">[m
     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">[m
     <meta name="theme-color" content="#000000">[m
     <!--[m
[1mdiff --git a/src/App.css b/src/App.css[m
[1mindex e915ce3..d6774e9 100644[m
[1m--- a/src/App.css[m
[1m+++ b/src/App.css[m
[36m@@ -4,12 +4,10 @@[m
 }[m
 [m
 .App-logo {[m
[31m-  height: 100px;[m
   position: absolute;[m
   right: 155px;[m
 }[m
 .App-logoPGP {[m
[31m-  height: 100px;[m
   position: absolute;[m
   right: 235px;[m
 }[m
[36m@@ -57,7 +55,7 @@[m
   font-size: large;[m
 }[m
 .a-fix {[m
[31m-  margin-left: 10px !important;[m
[32m+[m[32m  margin-right: 10px !important;[m
   margin-bottom: 0px !important;[m
 }[m
 .form-adm {[m
[1mdiff --git a/src/Head.js b/src/Head.js[m
[1mindex b7e00c3..f95e967 100644[m
[1m--- a/src/Head.js[m
[1m+++ b/src/Head.js[m
[36m@@ -16,8 +16,8 @@[m [mexport class Head extends Component {[m
               <p className="Text-indent">Hospital Universitário Lauro Wanderley</p>[m
             </div>[m
             <div>[m
[31m-              <img src={logoPGP} className="App-logoPGP" />[m
[31m-              <img src={logo} className="App-logo" />[m
[32m+[m[32m              <img src={logoPGP} height="100" className="App-logoPGP" />[m
[32m+[m[32m              <img src={logo}    height="100" className="App-logo" />[m
             </div>[m
           </Row>[m
       </div>[m
[1mdiff --git a/src/MainRoute.jsx b/src/MainRoute.jsx[m
[1mindex 914e70b..83975d4 100644[m
[1m--- a/src/MainRoute.jsx[m
[1m+++ b/src/MainRoute.jsx[m
[36m@@ -1,17 +1,22 @@[m
 import React,{ Component } from 'react';[m
 import './App.css';[m
 import { BrowserRouter as Router, Route, Switch} from "react-router-dom";[m
[31m-import Userpage from './userpage/UserPage.jsx';[m
[31m-import Head from './Head.js';[m
[31m-import Login from './login/Login';[m
[31m-import AdminPage from './adminpage/AdminPage.jsx'[m
[31m-import Aval from './avaliacao/avaliacao'[m
[31m-import Aval2 from './avaliacao/avaliacaoprob'[m
[31m-import Formulario from './avaliacao/formulario'[m
[32m+[m[32mimport Userpage     from './userpage/UserPage.jsx';[m[41m[m
[32m+[m[32mimport Head         from './Head.js';[m[41m[m
[32m+[m[32mimport Login        from './login/Login';[m[41m[m
[32m+[m[32mimport AdminPage    from './adminpage/AdminPage.jsx';[m[41m[m
[32m+[m[32mimport Aval         from './avaliacao/avaliacao';[m[41m[m
[32m+[m[32mimport Aval2        from './avaliacao/avaliacaoprob';[m[41m[m
[32m+[m[32mimport Cadastro     from './cadastrartec/CadastroTec0';[m[41m[m
[32m+[m[32mimport Unidade      from './unidade/unidade';[m[41m[m
[32m+[m[32mimport PesqUnidade  from './unidade/pesqUnidade';[m[41m[m
[32m+[m[32mimport VincularUni  from './unidade/vincular';[m[41m [m
[32m+[m[32mimport VincularProb from './adminpage/vinprob/vinculaProb';[m[41m[m
[32m+[m[32mimport notfount     from './paginaNaoEnc.png';[m[41m[m
 [m
 const NotFound = () =>([m
   <div>[m
[31m-    <h1>Pagina não encontrada, cidadão.</h1>[m
[32m+[m[32m    <img src={notfount} width="100%"/>[m[41m[m
   </div>[m
 );[m
 [m
[36m@@ -29,13 +34,17 @@[m [mclass Rota extends Component {[m
         <Head />[m
         <Router>[m
           <Switch>[m
[31m-            <Route exact path="/"        component={Login} />[m
[31m-            <Route path="/administrador" component={AdminPage} />[m
[31m-            <Route path="/esqueciSenha"  component={esqueci} />[m
[31m-            <Route path="/userpage"      component={Userpage} />[m
[31m-            <Route path="/avaliacao"     component ={Aval}/>[m
[32m+[m[32m            <Route exact path="/"        component = {Login} />[m[41m[m
[32m+[m[32m            <Route path="/esqueciSenha"  component = {esqueci} />[m[41m[m
[32m+[m[32m            <Route path="/userpage"      component = {Userpage} />[m[41m[m
[32m+[m[32m            <Route path="/avaliacao"     component = {Aval}/>[m[41m[m
             <Route path="/avalprob"      component = {Aval2}/>[m
[31m-            <Route path="/formulario"    component={Formulario} />[m
[32m+[m[32m            <Route path="/administrador" component = {AdminPage} />[m[41m[m
[32m+[m[32m            <Route path="/cadastroTec"   component = {Cadastro} />[m[41m[m
[32m+[m[32m            <Route path="/unidade"       component = {Unidade} />[m[41m[m
[32m+[m[32m            <Route path="/pesqUnidade"   component = {PesqUnidade}/>[m[41m[m
[32m+[m[32m            <Route path="/vincularuni"   component = {VincularUni}/>[m[41m[m
[32m+[m[32m            <Route path="/vincularprob"  component = {VincularProb}/>[m[41m[m
             <Route component={NotFound}/>[m
           </Switch>[m
         </Router>[m
[1mdiff --git a/src/adminpage/AdminPage.jsx b/src/adminpage/AdminPage.jsx[m
[1mindex 0a8e4f9..03ff53d 100644[m
[1m--- a/src/adminpage/AdminPage.jsx[m
[1m+++ b/src/adminpage/AdminPage.jsx[m
[36m@@ -3,6 +3,9 @@[m [mimport './../App.css';[m
 import { Input, Button, Card, CardBody, CardSubtitle, CardText, Row, Col, Collapse} from 'reactstrap';[m
 import axios from 'axios';[m
 import Lista from './todoList.jsx';[m
[32m+[m[32mimport Pesquisa from '../unidade/pesqUnidade';[m
[32m+[m[32mimport Decodificar from './decodifica';[m
[32m+[m
 [m
 const dados = {[m
   usuario: {[m
[36m@@ -46,7 +49,8 @@[m [mclass admin extends Component {[m
     this.state = {[m
       cpf: "",[m
       open: false,[m
[31m-      response: [][m
[32m+[m[32m      response: [],[m
[32m+[m[32m      token:"XyZY123789KjlH"[m
     };[m
 [m
     this.onChange = (evento) => {[m
[36m@@ -65,6 +69,24 @@[m [mclass admin extends Component {[m
   componentDidMount() {[m
     clickInfo = false;[m
   }[m
[32m+[m
[32m+[m[32m  pegaDados(){[m
[32m+[m[32m    var dados_url = Decodificar((this.props.location.search).substring(1))[m
[32m+[m
[32m+[m[32m    var cpfAdmin = (dados_url).substring(0,11);[m
[32m+[m[32m    var token_url =  (dados_url).substring(11);[m
[32m+[m[32m    if(token_url !== ""){[m
[32m+[m[32m      this.setState({token: token_url})[m
[32m+[m[32m    }[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  componentWillMount() {[m
[32m+[m
[32m+[m[32m    this.pegaDados();[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m
[32m+[m
   render(){[m
     return ([m
       <div className="container">[m
[36m@@ -73,9 +95,9 @@[m [mclass admin extends Component {[m
             <CardBody>[m
               <form>[m
                 <h3>Administrador</h3>[m
[31m-                <div>[m
[31m-                  <Info_adm {...dados}/>[m
[31m-                </div>[m
[32m+[m[32m                <Info_adm {...dados}/>[m
[32m+[m[32m                <Card>[m
[32m+[m[32m                </Card>[m
                 <div className="form-group">[m
                   <p></p>[m
                   <CardSubtitle>Pesquisar CPF: </CardSubtitle>[m
[36m@@ -83,35 +105,39 @@[m [mclass admin extends Component {[m
                     value={this.state.cpf} onChange={this.onChange} minLength='14' maxLength='14' />[m
                 </div>[m
                 <div>[m
[31m-                  <Button outline >Cadastrar Setor</Button>[m
[31m-                  <Button outline onClick={()=> {axios.get('https://hulwteste.herokuapp.com/usuario/cpf/' + cpf2int(this.state.cpf) )[m
[32m+[m[32m                  <Button className="a-fix" outline onClick={()=>[m
[32m+[m[32m                  {axios.get('https://hulw.herokuapp.com/usuario/cpf/' + cpf2int(this.state.cpf) )[m
                     .then((response) => {[m
                       this.setState({response: response.data});[m
                       this.setState({open: true });[m
[31m-                      console.log(response.data);[m
                     })[m
                     .catch((error) => {[m
                       this.setState({open: false });[m
[31m-                      console.log("Aki é a referencia da pagina de cadastro do usuario!");[m
[32m+[m[32m                      if(error.response.status == 404){[m
[32m+[m[32m                        alert("Usuário não cadastrado!")[m
[32m+[m[32m                        window.open("/cadastroTec","_self");[m
[32m+[m[32m                      }[m
                     });[m
                     clickInfo = true;[m
[31m-                  }}[m
[31m-                  className="a-fix">Pesquisar</Button>[m
[31m-              </div>[m
[31m-            </form>[m
[31m-            <Collapse isOpen={this.state.open}>[m
[31m-              {clickInfo === true &&[m
[31m-                <div>[m
[31m-                  <Lista list={this.state.response}/>[m
[32m+[m[32m                  }}>Cadastrar/Pesquisar</Button>[m
[32m+[m[32m                  <Button className="a-fix" outline href={"/vincularprob"}>Vincular Probatorio</Button>[m
                 </div>[m
[31m-              }[m
[31m-            </Collapse>[m
[31m-          </CardBody>[m
[31m-        </Card>[m
[32m+[m[32m              </form>[m
[32m+[m[32m              <Collapse isOpen={this.state.open}>[m
[32m+[m[32m                {clickInfo === true &&[m
[32m+[m[32m                  <div>[m
[32m+[m[32m                    <Lista list={this.state.response} cpfAdmin={cpf2int(dados.usuario.CPF)}/>[m
[32m+[m[32m                  </div>[m
[32m+[m[32m                }[m
[32m+[m[32m              </Collapse>[m
[32m+[m[32m            </CardBody>[m
[32m+[m[32m          </Card>[m
[32m+[m[32m        </div>[m
[32m+[m[32m        <Pesquisa cpf_adm={dados.usuario.CPF} token={this.state.token}/>[m
       </div>[m
[31m-    </div>[m
[31m-  )[m
[31m-}}[m
[32m+[m[32m    );[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
 [m
 [m
 function cpf2int(cpf){[m
[36m@@ -120,6 +146,7 @@[m [mfunction cpf2int(cpf){[m
   return cpf;[m
 }[m
 [m
[32m+[m
 function formatarCpf(cpf){[m
   cpf = cpf.replace(/\D/g,"");[m
   cpf = cpf.replace(/(\d{3})(\d)/,"$1.$2");[m
[1mdiff --git a/src/adminpage/codifica.jsx b/src/adminpage/codifica.jsx[m
[1mnew file mode 100644[m
[1mindex 0000000..4fb304a[m
[1m--- /dev/null[m
[1m+++ b/src/adminpage/codifica.jsx[m
[36m@@ -0,0 +1,8 @@[m
[32m+[m[32mexport default function codificar(valor){[m
[32m+[m[32m    var base64 = require('base-64')[m
[32m+[m[32m    var utf8 = require('utf8')[m
[32m+[m[41m  [m
[32m+[m[32m    var codificado = utf8.encode(base64.encode(valor))[m
[32m+[m[41m  [m
[32m+[m[32m    return codificado;[m
[32m+[m[32m  }[m
\ No newline at end of file[m
[1mdiff --git a/src/adminpage/decodifica.jsx b/src/adminpage/decodifica.jsx[m
[1mnew file mode 100644[m
[1mindex 0000000..c766d42[m
[1m--- /dev/null[m
[1m+++ b/src/adminpage/decodifica.jsx[m
[36m@@ -0,0 +1,8 @@[m
[32m+[m[32mexport default function decodificar(valor){[m
[32m+[m[32m    var base64 = require('base-64')[m
[32m+[m[32m    var utf8 = require('utf8')[m
[32m+[m[41m  [m
[32m+[m[32m    var decodificado = utf8.decode(base64.decode(valor))[m
[32m+[m[41m  [m
[32m+[m[32m    return decodificado;[m
[32m+[m[32m}[m
\ No newline at end of file[m
[1mdiff --git a/src/adminpage/todoList.jsx b/src/adminpage/todoList.jsx[m
[1mindex de6fb17..10cab49 100644[m
[1m--- a/src/adminpage/todoList.jsx[m
[1m+++ b/src/adminpage/todoList.jsx[m
[36m@@ -1,12 +1,22 @@[m
 import React from 'react'[m
 import { Button, Table} from 'reactstrap';[m
[32m+[m[32mimport Admin  from "./AdminPage"[m
 [m
 export default props => {[m
 [m
   var list = props.list;[m
[32m+[m[32m  var cpfAdmin = props.cpfAdmin;[m
[32m+[m[32m  var base64 = require('base-64')[m
[32m+[m[32m  var utf8 = require('utf8')[m
[32m+[m
   if(!props.list.length){[m
     list = [props.list];[m
   }[m
[32m+[m[32m  /*[m
[32m+[m[32m  verificar(){[m
[32m+[m[32m    window.open("/cadastroTec?"+this.state.cpf);[m
[32m+[m[32m  }[m
[32m+[m[32m*/[m
 [m
   const renderRows = () =>{[m
     return list.map(todo =>([m
[36m@@ -15,7 +25,7 @@[m [mexport default props => {[m
           <td >{todo.cd_CPF}</td>[m
           <td >{todo.cd_Email}</td>[m
           <td>[m
[31m-            <Button className={'btn btn-success'}>Editar</Button>[m
[32m+[m[32m            <Button className={'btn btn-success'} href={"/cadastroTec?"+   utf8.encode(base64.encode(todo.cd_CPF+cpfAdmin))   }>Editar</Button>[m
           </td>[m
       </tr>[m
     ))[m
[1mdiff --git a/src/adminpage/vinprob/probList.jsx b/src/adminpage/vinprob/probList.jsx[m
[1mnew file mode 100644[m
[1mindex 0000000..351cb8d[m
[1m--- /dev/null[m
[1m+++ b/src/adminpage/vinprob/probList.jsx[m
[36m@@ -0,0 +1,41 @@[m
[32m+[m[32mimport React from 'react'[m
[32m+[m[32mimport { Button, Table, Input, CustomInput} from 'reactstrap';[m
[32m+[m
[32m+[m[32mexport default props => {[m
[32m+[m
[32m+[m[32m  var list = props.list;[m
[32m+[m[32m  var cpfAdmin = props.cpfAdmin;[m
[32m+[m[32m  if(!props.list.length){[m
[32m+[m[32m    list = [props.list];[m
[32m+[m[32m  }[m
[32m+[m[32m  // this.handleInputChange = this.handleInputChange.bind(this);[m
[32m+[m
[32m+[m[32m  const renderRows = () =>{[m
[32m+[m[32m    return list.map(todo =>([m
[32m+[m[32m      <tr key={todo.id_Usuario}>[m
[32m+[m[32m          <td >{todo.no_Pessoa}</td>[m
[32m+[m[32m          <td >{todo.cd_CPF}</td>[m
[32m+[m[32m          <td >{todo.cd_Email}</td>[m
[32m+[m[32m          <td>[m
[32m+[m[32m            <CustomInput type="checkbox" id="probatorio"  checked={todo.probatorio} onChange={""} />[m
[32m+[m[32m          </td>[m
[32m+[m[32m      </tr>[m
[32m+[m[32m    ))[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  return([m
[32m+[m[32m    <Table>[m
[32m+[m[32m      <thead>[m
[32m+[m[32m        <tr>[m
[32m+[m[32m          <th> Nome</th>[m
[32m+[m[32m          <th> CPF</th>[m
[32m+[m[32m          <th> E-Mail</th>[m
[32m+[m[32m          <th> Estagio Probatorio</th>[m
[32m+[m[32m        </tr>[m
[32m+[m[32m      </thead>[m
[32m+[m[32m      <tbody>[m
[32m+[m[32m      {renderRows()}[m
[32m+[m[32m      </tbody>[m
[32m+[m[32m    </Table>[m
[32m+[m[32m  )[m
[32m+[m[32m}[m
[1mdiff --git a/src/adminpage/vinprob/vinculaProb.jsx b/src/adminpage/vinprob/vinculaProb.jsx[m
[1mnew file mode 100644[m
[1mindex 0000000..4195ce6[m
[1m--- /dev/null[m
[1m+++ b/src/adminpage/vinprob/vinculaProb.jsx[m
[36m@@ -0,0 +1,119 @@[m
[32m+[m[32mimport React, { Component } from 'react';[m
[32m+[m[32mimport '../../App.css';[m
[32m+[m[32mimport { Input, Button, Card, CardBody, CardSubtitle, CardText, Row, Col, Collapse, FormGroup, Form} from 'reactstrap';[m
[32m+[m[32mimport axios from 'axios';[m
[32m+[m[32mimport Lista from './probList';[m
[32m+[m[32mimport Decodificar from '../decodifica';[m
[32m+[m[32mvar token = {[m
[32m+[m[32m  'x-access-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIsImNwZiI6IjEwNDEwNDEwNDEwIiwiaWF0IjoxNTI5MjQ3Mjk4LCJleHAiOjE1MjkzMzM2OTh9.l9xtUlHBBn6sgXbNB5Gm_YIzfwk096h27nYNmSRVJCE',[m
[32m+[m[32m  // 'Content-Type':'application/json',[m
[32m+[m[32m  // 'Accept':'application/json',[m
[32m+[m[32m};[m
[32m+[m[32m// const instance = axios.create();[m
[32m+[m[32m// instance.defaults.headers.common['Authorization'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIsImNwZiI6IjEwNDEwNDEwNDEwIiwiaWF0IjoxNTI5MjQ3Mjk4LCJleHAiOjE1MjkzMzM2OTh9.l9xtUlHBBn6sgXbNB5Gm_YIzfwk096h27nYNmSRVJCE';[m
[32m+[m[32mvar clickInfo = false;[m
[32m+[m[32mclass admin extends Component {[m
[32m+[m[32m  constructor(){[m
[32m+[m[32m    super();[m
[32m+[m[32m    this.state = {