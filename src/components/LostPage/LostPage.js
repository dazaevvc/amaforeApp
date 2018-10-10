import React, { Component } from 'react';
import './lostPage.css';
import ohNo from '../../images/ohNo.png';
import { Link } from 'react-router-dom';

class LostPage extends Component {
  handleClick() {
    console.log('conected');
  }
  render() {
    return (
      <div className="lost-page">
        <img src={ohNo} alt="ohNo" className="ohNo" />
        <h2 className="lost-title">LA RESPUESTA ES INCORRECTA</h2>
        <h1 className="lost-title-2">
          DESCARGA EL LIBRO EN TU TELEFONO <br /> Y MIRA LA RESPUESTA
        </h1>
        <Link to="/">
          <button className="gracias-button">INTENTAR DE NUEVO</button>
        </Link>
      </div>
    );
  }
}

export default LostPage;
