import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../Header/Header';
import TestDashboard from '../TestDashboard/TestDashboard';
import TestResults from '../TestResults/TestResults';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Router>
          <Header />
          <div>
            <Route path="/dashboard" exect component={TestDashboard} />
            <Route path="/results" component={TestResults} />
          </div>
        </Router>
      </>
    );
  }
}

export default hot(App);
