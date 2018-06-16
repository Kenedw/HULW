import React, { Component } from 'react';
import './../App.css';
import Lista from '../todoList.jsx';




class Info_adm extends Component {
  constructor(){
    super();
    this.state = {
      cpf: "",
      open: false,
      response: []
    };
  }

  render(){
    return(
      <div>
        <Lista list={this.state.response}/>
      </div>
    );
  }
}
