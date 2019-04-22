import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import './App.css';
import ModalLogout from '../ModalLogout/ModalLogout';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <h1>Hello</h1>
        <ModalLogout />
      </>
    );
  }
}

export default hot(App);
