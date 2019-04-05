import React, { Component } from 'react';
import './App.css';

import { Route, NavLink, withRouter } from 'react-router-dom';

import Login from './components/Login.js';
import SignUp from './components/SignUp';
import Jokes from './components/Jokes';


class App extends Component {
  logout = () => {
    localStorage.removeItem('token');
    this.props.history.push('/signin');
  }

  render() {
    return (
      <div className="App">
        <header>
          <NavLink to="/login">Login</NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/register">Sign Up</NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/jokes">Jokes</NavLink>
          &nbsp;|&nbsp;
          <button onClick={this.logout}>Sign Out</button>
        </header>
        <body>
          <Route path="/login" render={(props) => <Login {...props} /> } />
          <Route path="/register" render={(props) => <SignUp {...props} /> } />
          <Route path="/jokes" render={(props) => <Jokes {...props} /> } />
        </body>
      
      </div>
    );
  }
}

export default withRouter(App);
