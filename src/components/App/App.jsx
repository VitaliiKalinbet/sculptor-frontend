import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <h1>Hello</h1>
      </>
    );
  }
}

export default hot(App);
