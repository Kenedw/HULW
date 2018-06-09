import React, { Component } from 'react';
import logo from './logo ufpb.png';
import logoPGP from './logo progep.png';
import './App.css';
import {  Row } from 'reactstrap';

export class Head extends Component {
  render() {
    return (
      <div className="App App-header">
          <Row>
            <div>
              <h1 className="App-title Text-indent">Sistema de Avaliação de Desempenho</h1>
              <p className="Text-indent">Universidade Federal da Paraiba</p>
              <p className="Text-indent">Pró-Reitoria de Gestão de Pessoas</p>
              <p className="Text-indent">Hospital Universitário Lauro Wanderley</p>
            </div>
            <div>
              <img src={logoPGP} className="App-logoPGP" />
              <img src={logo} className="App-logo" />
            </div>
          </Row>
      </div>
    );
  }
}
export default Head;
