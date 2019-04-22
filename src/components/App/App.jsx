import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import Sidebar from '../Sidebar/Sidebar';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Sidebar />
      </>
    );
  }
}

export default hot(App);
