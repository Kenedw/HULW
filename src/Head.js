import React, { Component } from 'react';
import logo from './logo ufpb.png';
import logoPGP from './logo progep.png';
import './App.css';
import {  Row, Col} from 'reactstrap';

export class Head extends Component {
  render() {
    return (
    <div className="App App-header">
      <header>
        <Row>
          <img src={logo} className="App-logo" />
          <img src={logoPGP} className="App-logoPGP" />
          <div>
          <h1 className="App-title Text-indent App-logo">Sistema de Avaliação de Desempenho</h1>
          <p className="Text-indent App-logo">Universidade Federal da Paraiba</p>
          <p className="Text-indent App-logo">Pró-Reitoria de Gestão de Pessoas</p>
          <p className="Text-indent App-logo">Hospital Universitário Lauro Wanderley</p>
          </div>
        </Row>
      </header>
    </div>
    );
  }
}
export default Head;
