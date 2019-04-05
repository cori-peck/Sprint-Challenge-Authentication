import React, { Component } from 'react';
import './App.css';

import { Route, NavLink } from 'react-router-dom';

import Login from './components/Login.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <NavLink to="/login">Login</NavLink>
        </header>
        <body>
          <Route path="/login" render={(props) => <Login {...props} /> } />
        </body>
      
      </div>
    );
  }
}

export default App;
