import React, { Component } from 'react';
import logo from './Logo UFPB.svg';
import './App.css';
import {  Row, Col} from 'reactstrap';

export class Head extends Component {
  render() {
    return (
    <div className="App">
      <header>
        <Row  className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Col className="App-logo">
            <Row>
              <h1 className="App-title Text-indent ">Sistema de Avaliação de Desempenho</h1>
            </Row>
            <Row>
              <a className="Text-indent">Hospital Universitário Lauro Wanderley</a>
            </Row>
            <Row>
              <p className="Text-indent">Universidade Federal da Paraiba</p>
            </Row>
          </Col>
        </Row>
      </header>
    </div>
    );
  }
}
export default Head;
