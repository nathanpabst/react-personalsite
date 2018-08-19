import React from 'react';
import {Route, BrowserRouter, Redirect, Switch} from 'react-router-dom';
// import firebase from 'firebase';

import './App.css';

import Navbar from '../Components/Navbar/Navbar';
import fbConnection from '../firebaseRequests/connection';
fbConnection();

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar />
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
