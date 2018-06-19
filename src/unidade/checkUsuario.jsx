import React from 'react'
import { Button, Table, Label, Input} from 'reactstrap';
import Vinculo  from "./vincular"

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
          <td>{todo.dt_Ano}</td> {/*Ano precisa ser passado*/}
          <td>
            <Button className={'btn btn-success'}>Adicionar</Button>
        {/*Adicionar POST no localização usando id_Usuario e codUnidade ischefe = false*/}
          </td>
          <td>
            <Button className={'btn btn-warning'}>Adicionar como Chefe</Button>
        {/*Adicionar POST no localização usando id_Usuario e codUnidade ischefe = True*/}
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
