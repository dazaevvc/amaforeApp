import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import GamePage from './components/GamePage/GamePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }
}

export default App;
