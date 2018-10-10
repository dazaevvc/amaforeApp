import React, { Component } from 'react';
import './gamePage.css';
import { preguntasRespuestasPaginas } from '../mockPreguntas';

class GamePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wins: 1,
      currentPregunta: {},
      preguntasUsadas: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { currentPregunta, preguntasUsadas } = this.state;

    if (Object.keys(currentPregunta).length === 0) {
      const random = Math.floor(
        Math.random() * preguntasRespuestasPaginas.length
      );
      let preguntaUsada = preguntasRespuestasPaginas[random];
      preguntasRespuestasPaginas.splice(random, 1);

      this.setState({
        currentPregunta: preguntaUsada,
        preguntasUsadas: [...preguntasUsadas, preguntaUsada.pregunta]
      });
    }
  }

  handleSubmit() {
    const { currentPregunta, preguntasUsadas, wins } = this.state;
    let text = document.forms['myForm']['answer'].value;
    const random = Math.floor(
      Math.random() * preguntasRespuestasPaginas.length
    );
    //si ya no hay preguntas cambia de pagina
    if (preguntasRespuestasPaginas.length === 0) {
      if (wins === 5) {
        document.location.href = '/winpage';
      }
    }
    if (currentPregunta.respuesta === text) {
      //si la respuesta es correcta
      //1 settear la nueva pregunta
      let preguntaRamdom = preguntasRespuestasPaginas[random];

      let laPreguntaEsDiferente = !preguntasUsadas.includes(
        preguntaRamdom.pregunta
      );
      if (laPreguntaEsDiferente && preguntaRamdom) {
        preguntasRespuestasPaginas.splice(random, 1);
        this.setState({
          wins: wins + 1,
          currentPregunta: preguntaRamdom,
          preguntasUsadas: [...preguntasUsadas, preguntaRamdom.pregunta]
        });
        document.forms['myForm']['answer'].value = '';
      }
    } else {
      document.location.href = '/lostpage';
    }
  }

  render() {
    const { currentPregunta, preguntasUsadas } = this.state;

    return (
      <div className="game-page">
        <h2 className="instructions">
          DESCARGA EL LIBRO EN TU TELEFONO <br /> Y MIRA LA RESPUESTA EN LA
          PAGINA {currentPregunta.pagina}
        </h2>
        <form name="myForm" onSubmit={this.handleSubmit} method="post">
          <h1 className="quote">
            "{currentPregunta.pregunta}
            <input id="answer" type="text" name="answer" autoComplete="off" />"
          </h1>
          <div
            type="submit validateForm()"
            onClick={this.handleSubmit}
            className="listo-button"
          >
            <span>LISTO</span>
          </div>
        </form>
      </div>
    );
  }
}

export default GamePage;
