import React from 'react'
import { Button, Table, Input, CustomInput} from 'reactstrap';

export default props => {

  var list = props.list;
  var cpfAdmin = props.cpfAdmin;
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
            <Input type="checkbox" id="probatorio"  checked={todo.probatorio}  />
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
          <th> Estagio Probatorio</th>
        </tr>
      </thead>
      <tbody>
      {renderRows()}
      </tbody>
    </Table>
  )
}

function handleInputChange(event){

}
