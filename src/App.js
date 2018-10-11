import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import GamePage from './components/GamePage/GamePage';
import WinPage from './components/WinPage/WinPage';
import LostPage from './components/LostPage/LostPage';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path={'/'} exact component={HomePage} />
        <Route path={'/game'} component={GamePage} />
        <Route path={'/winpage'} component={WinPage} />
        <Route path={'/lostpage'} component={LostPage} />
      </div>
    );
  }
}

export default App;
