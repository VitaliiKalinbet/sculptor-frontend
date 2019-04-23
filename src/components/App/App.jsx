import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import Login from '../Login/Login';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Login />
      </>
    );
  }
}

export default hot(App);
