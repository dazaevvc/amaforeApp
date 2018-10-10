import React, { Component } from 'react';
import './winPage.css';
import alcancia from '../../images/alcancia.png';
import { Link } from 'react-router-dom';

class WinPage extends Component {
  handleClick() {
    console.log('conected');
  }
  render() {
    return (
      <div className="win-page">
        <h2 className="win-title">
          GRACIAS <br /> POR CREER EN LA <br /> EDUCACION FINANCIERA!
        </h2>
        <h1 className="title-2">GANASTE UNA ALCANCIA</h1>
        <img src={alcancia} alt="alcancia" className="alcancia" />
        <Link to="/">
          <button className="gracias-button">GRACIAS!</button>
        </Link>
      </div>
    );
  }
}

export default WinPage;
