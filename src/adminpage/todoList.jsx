import React from 'react'
import { Button, Table} from 'reactstrap';

export default props => {

  var list = props.list;
  if(!props.list.length){
    list = [props.list];
  }

  const renderRows = () =>{
    return list.map(todo =>(
      <tr key={todo.id_Usuario}>
          <td >{todo.no_Pessoa}</td>
          <td >{todo.cd_CPF}</td>
          <td >{todo.cd_Email}</td>
          <td>
            <Button className={'btn btn-success'}>Editar</Button>
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
