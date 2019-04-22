import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import './App.css';
import Header from '../Header/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
      </>
    );
  }
}

export default hot(App);
