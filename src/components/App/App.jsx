import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import Registration from '../Registration/Registration';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Registration />
      </>
    );
  }
}

export default hot(App);
