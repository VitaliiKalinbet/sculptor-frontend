import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
// import Container from '../Container/Container';
import './App.css';
import Sidebar from '../Sidebar/Sidebar';

// Dashboard
import Dashboard from '../Dashboard/Dashboard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
