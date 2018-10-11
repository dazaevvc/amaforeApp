import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import GamePage from './components/GamePage/GamePage';
import WinPage from './components/WinPage/WinPage';
import LostPage from './components/LostPage/LostPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact={true} path={'/'} component={HomePage} />
          <Route path={'/game'} component={GamePage} />
          <Route path={'/winpage'} component={WinPage} />
          <Route path={'/lostpage'} component={LostPage} />
        </div>
      </Router>
    );
  }
}

export default App;
