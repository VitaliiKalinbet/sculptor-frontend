import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import Dashboard from '../Dashboard/Dashboard';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Dashboard />
      </>
    );
  }
}

export default hot(App);
