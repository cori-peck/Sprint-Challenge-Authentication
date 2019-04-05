import React, { Component } from 'react';
import './App.css';

import { Route, NavLink } from 'react-router-dom';

import Login from './components/Login.js';
import SignUp from './components/SignUp';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <NavLink to="/login">Login</NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/register">Sign Up</NavLink>
        </header>
        <body>
          <Route path="/login" render={(props) => <Login {...props} /> } />
          <Route path="/register" render={(props) => <SignUp {...props} /> } />
        </body>
      
      </div>
    );
  }
}

export default App;
