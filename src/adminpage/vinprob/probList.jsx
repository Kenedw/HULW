import React from 'react'
import { Button, Table, Input, CustomInput} from 'reactstrap';
import axios from 'axios';

const URL = 'https://hulw.herokuapp.com/';

export default props => {
  var CheckProb = true;
  var list      = props.list;
  var cpfAdmin  = props.cpfAdmin;
  if(!props.list.length){
    list = [props.list];
  }
  //captura o estado inicial do checkbox
  function init_checkbox(){
    console.log("iniciado");
    axios.get(`${URL}estagio/probatorio/usuario/` + list.id_Usuario, props.token )
    .then((response) => {//se ela existir na tabela, ela esta em estado probatorio
      console.log(response);
      list.id_Estagio_Probatorio = response.id_Estagio_Probatorio;
      this.CheckPro = true;
    }).catch((error) => {//se não existir é a primeira vez
      console.log(error);
      this.CheckPro = false;
    });
    console.log(list.id_Estagio_Probatorio);
  }
  const renderRows = () =>{
    return list.map(todo =>(
      <tr key={todo.id_Usuario}>
        <td>{todo.no_Pessoa}</td>
        <td>{todo.cd_CPF}   </td>
        <td>{todo.cd_Email} </td>
        <td>{props.dataProb.length!==0?props.dataProb:todo.dt_Admissao.substring(0,4)}</td>
        <td>
          <Input type="checkbox" name={todo.id_Usuario}  checked={this.CheckProb}  onChange={handleInputChange(todo)} />
        </td>
      </tr>
    ))
  }
  function handleInputChange(cha) {
    var data = {'dt_Ano':function(){props.dataProb.length!==0?props.dataProb:cha.dt_Admissao.substring(0,4)},'id_Usuario':cha.id_Usuario}
    data = JSON.stringify(data);
    console.log(data);
    if(CheckProb === false){
      CheckProb = true;
      axios.post(`${URL}estagio/estagio/probatorio/`, data, props.token )
      .then((response) => {//se ela existir na tabela, ela esta em estado probatorio
        console.log(response.data);
        this.CheckPro = true;
      }).catch((error) => {
        console.log(error);
        this.CheckPro = false;
      });
    }else{
      axios.delete(`${URL}estagio/estagio/probatorio/` + cha.id_Estagio_Probatorio, props.token )
      .then((response) => {
        console.log(response);
        this.CheckPro = false;
      });
      CheckProb = false;
    }
  }

  return(
    <Table>
      <thead>
        <tr>
          <th> Nome</th>
          <th> CPF</th>
          <th> E-Mail</th>
          <th> Ano</th>
          <th> Estagio Probatorio</th>
        </tr>
      </thead>
      <tbody>
        {init_checkbox()}
        {renderRows()}
      </tbody>
    </Table>
  )
}
