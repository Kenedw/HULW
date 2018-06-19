import React from 'react'
import { Button, Table, Input, CustomInput} from 'reactstrap';
import axios from 'axios';

const URL = 'https://hulw.herokuapp.com/';
var token = {
  headers:
  {
    'cache-control': 'no-cache',
    'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDMsImNwZiI6IjExMTExMTExMTExIiwiaWF0IjoxNTI5NDI0MDU1LCJleHAiOjE1Mjk1MTA0NTV9.T0BatuKF9_th00982OFzuOqqdoMwZCVBnMPH8c1VbDM',
    'accept': 'application/json',
    'content-type': 'application/json'
  }
};

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
    console.log(props.list.id_Usuario);
    axios.get(`${URL}estagio/probatorio/usuario/` + props.list.id_Usuario, token )
    .then((response) => {//se ela existir na tabela, ela esta em estado probatorio
      console.log(response);
      props.list['id_Estagio_Probatorio'] = response.id_Estagio_Probatorio;
      this.CheckPro = true;
    }).catch((error) => {//se não existir é a primeira vez
      console.log("não esta no probatorio");
      this.CheckPro = false;
    });
    console.log(props.list.id_Estagio_Probatorio);
  }
  const renderRows = () =>{
    return list.map(todo =>(
      <tr key={todo.id_Usuario}>
        <td>{todo.no_Pessoa}</td>
        <td>{todo.cd_CPF}   </td>
        <td>{todo.cd_Email} </td>
        <td>{props.dataProb.length!==0?props.dataProb:todo.dt_Admissao.substring(0,4)}</td>
        <td>
          <Button outline onClick={()=> {
              var jdata = {'id_Usuario':todo.id_Usuario};
              jdata['dt_Ano']=props.dataProb.length!==0?props.dataProb:todo.dt_Admissao.substring(0,4);
              jdata = JSON.stringify(jdata);
              console.log(jdata);

              axios.post(`${URL}estagio/probatorio/`,jdata,token )
              .then((response) => {
                this.setState({response: response.data});
                console.log("sucesso!")
              })
              .catch((error) => {
                this.setState({open: false });
                if(error.response.status == 404){
                  alert("Usuário não cadastrado no probatorio!")
                }
              });
            }}>Adicionar Probatorio</Button>
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
            <th> Estagio Probatorio</th>
          </tr>
        </thead>
        <tbody>
          {init_checkbox(list)}
          {renderRows()}
        </tbody>
      </Table>
    )
  }
