import React from 'react'
import { Button, Table, Label, Input} from 'reactstrap';
import Vinculo  from "./vincular"
import axios from 'axios';
import {Token} from '../login/Login';


var token = {
  headers:
  {
    'cache-control': 'no-cache',
    'x-access-token': Token(),
    accept: 'application/json',
    'content-type': 'application/json'
  }
};

const URL = 'http://hulw.herokuapp.com/'


export default props => {

  var list = props.list;
  var cpfAdmin = props.cpfAdmin;
  var base64 = require('base-64');
  var utf8 = require('utf8');
  var codUnidade = props.codUnidade;

  if(!props.list.length){
    list = [props.list];
  }
  /*
  verificar(){
  window.open("/cadastroTec?"+this.state.cpf);
  }
  */

  const renderRows = () =>{
    return list.map(todo =>(
      <tr key={todo.id_Usuario}>
        <td >{todo.no_Pessoa}</td>
        <td >{todo.cd_CPF}</td>
        <td >{todo.cd_Email}</td>
        <td>{todo.dt_Admissao.substring(0,4)}</td> {/*Ano precisa ser passado*/}
          <td>
            <Button className={'btn btn-success'} onClick={
                ()=> {
                  //event.preventDefault();
                  // var token = store.getState().session.token;
                  //let token = localStorage.getItem('x-access-token');
                  //alert(token)
                  const usuario = {
                    id_Usuario: todo.id_Usuario,

                    id_Unidade: "1",//todo.id_Unidade,
                    // cd_Email: todo.cd_Email,
                    // cd_CPF: todo.cd_CPF,
                    // chefe: this.state.chefe,
                    // unidade: this.state.unidade,
                    dt_Ano: todo.dt_Admissao.substring(0,4),
                    is_Chefe: true,
                  };

                  // if(this.state.flagEditar === false){
                  // alert(JSON.stringify(usuario))
                  axios.post(`${URL}localizacao`,JSON.stringify(usuario), token) //JSON.stringify(usuario)
                  .then(res => {
                    //console.log(res.Object.data);
                    console.log(res.data);
                    // alert(res.data.message) /// alerta sucesso ao cadastrar
                    //alert("Deu certo!")
                    window.location.reload() // atualiza a página caso sucesso
                  })
                  .catch(error => {
                    // console.log(error)//.response)//.data.error.message);
                    // alert(error.response)//.data.error.message) // alerta o erro ao submit
                  });
                }
              }>Adicionar</Button>
            </td>
            <td>
              <Button className={'btn btn-warning'}>Adicionar como Chefe</Button>

            </td>
          </tr>
        ))
      }

      return(
        <Table>
          <thead>
            <tr>
              <th> Nome</th>
              <th> CPF</th>
              <th> E-Mail</th>
              <th> Ano</th>
            </tr>
          </thead>
          <tbody>
            {renderRows()}
          </tbody>
        </Table>
      )
    }
