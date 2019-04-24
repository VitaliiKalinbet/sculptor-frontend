import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import LoginPage from '../../pages/LoginPage';
import RegistrationPage from '../../pages/RegistrationPage';
import MainPage from '../../pages/MainPage';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: true };
  }

  render() {
    const { loggedIn } = this.state;
    return (
      <>
        <Router>
          <Route exact path="/login" component={LoginPage} />
          <Route path="/registration" component={RegistrationPage} />
          <Route
            exact
            path="/"
            render={() => (loggedIn ? <MainPage /> : <Redirect to="/login" />)}
          />
        </Router>
      </>
    );
  }
}

export default hot(App);
