import React from 'react';
// import {Route, BrowserRouter, Redirect, Switch} from 'react-router-dom';
// import firebase from 'firebase';

import './App.css';

import fbConnection from '../firebaseRequests/connection';
fbConnection();

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button className="btn btn-danger">ImaButton</button>
      </div>
    );
  }
}

export default App;
