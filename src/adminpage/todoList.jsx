import React from 'react'
import { Button, Table} from 'reactstrap';
import Admin  from "./AdminPage"

export default props => {

  var list = props.list;
  var cpfAdmin = props.cpfAdmin;
  var base64 = require('base-64')
  var utf8 = require('utf8')

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
          <td>
            <Button className={'btn btn-success'} href={"/cadastroTec?"+   utf8.encode(base64.encode(todo.cd_CPF))   }>Editar</Button>
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
          <th> Ação</th>
        </tr>
      </thead>
      <tbody>
      {renderRows()}
      </tbody>
    </Table>
  )
}
