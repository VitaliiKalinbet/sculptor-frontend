/*  eslint-disable  */
import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';

// import Container from '../Container/Container';
import './App.css';
import Sidebar from '../Sidebar/Sidebar';

// Dashboard
import Dashboard from '../Dashboard/Dashboard';
import { func } from 'prop-types';

//
class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Dashboard />
      </div>
    );
  }
}

export default hot(App);
