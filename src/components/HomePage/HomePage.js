import React, { Component } from 'react';
import './homePage.css';
import logoPantalla from '../../images/logoPantalla.png';
import logosAbajo from '../../images/logosAbajo.png';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  handleClick() {
    console.log('conected');
  }
  render() {
    return (
      <div className="home-page">
        <img
          src={logoPantalla}
          alt="aguila-y-sol-logo"
          className="logoPantalla"
        />
        <Link to="/game">
          <button onClick={this.handleClick} className="start-button">
            YO SÉ LA RESPUESTA
          </button>
        </Link>
        <img src={logosAbajo} alt="logosAbajo" className="logosAbajo" />
      </div>
    );
  }
}

export default HomePage;
