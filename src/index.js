import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import HomePage from './components/HomePage/HomePage';
import GamePage from './components/GamePage/GamePage';
import WinPage from './components/WinPage/WinPage';
import LostPage from './components/LostPage/LostPage';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
