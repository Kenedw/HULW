import React from 'react'
import { Button, Table} from 'reactstrap';
import Pesq from './pesqUnidade';

export default props => {

  var list = props.list;
  var codUnidade = props.codUnidade;
  
  if(!props.list.length){
    list = [props.list];
  }

  const renderRows = () =>{
    return list.map(todo =>(
      <tr key={todo.cd_Unidade}>
          <td >{todo.de_UNIDADE}</td>
          <td>
            <Button className={'btn btn-dark'} href={"/vincularuni?" + codUnidade}>Adicionar Vinculos</Button>
          </td>
      </tr>
    ))
  }

  return(
    <Table>
      <thead>
        <tr>
          <th> Descrição </th>
        </tr>
      </thead>
      <tbody>
      {renderRows()}
      </tbody>
    </Table>
  )
}
