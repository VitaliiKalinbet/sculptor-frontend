import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import DeleteButton from '../default/Button/DeleteButton/DeleteButton';
import LoginButton from '../default/LoginButton/LoginButton';
import EditButton from '../default/EditButton/EditButton';
import SetButton from '../default/SetButton/SetButton';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <LoginButton color="white" />
        <DeleteButton />
        <EditButton />
        <SetButton />
      </div>
    );
  }
}
export default hot(App);
