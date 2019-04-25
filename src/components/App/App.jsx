import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoginPage from '../../pages/LoginPage';
import RegistrationPage from '../../pages/RegistrationPage';
import MainPage from '../../pages/MainPage';

// import Statistics from '../Statistics/Statistics';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { user } = this.props;
    return (
      <>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/registration" component={RegistrationPage} />
          <Route
            path="/"
            // render={() => (loggedIn ? <MainPage /> : <Redirect to="/login" />)}
          >
            {user ? <MainPage /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </>
    );
  }
}

App.propTypes = {
  user: PropTypes.shape.isRequired,
};

function mapStateToProps(state) {
  return {
    user: state.user.user,
  };
}

export default withRouter(hot(connect(mapStateToProps)(App)));
