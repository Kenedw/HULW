import React from 'react'
import IconButton from './iconButton'

export default props => {

  const renderRows = () =>{
    const list = props.list || []
    return list.map(todo =>(
      <tr key={todo._id}>
        <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
        <td>
          <IconButton style='success' icon='check' onClick=""></IconButton>
        </td>
      </tr>
    ))
  }

  return(
    <table className='table'>
      <thead>
        <tr>
          <th> Descrição</th>
          <th className='tableActions'> Ações</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
}
