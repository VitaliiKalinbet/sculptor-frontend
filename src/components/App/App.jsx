/*eslint-disable*/
import React, { Component } from 'react';
// import { hot } from 'react-hot-loader/root';
import './App.css';
import Picker from '../Picker/Picker';

// Dashboard
import Dashboard from '../Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <>
        <Dashboard />
        <h1>Hello</h1>
        <Picker />
      </>
    );
  }
}

export default App;
