import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import './App.css';
import ModalGoalWeekSelect from '../ModalGoalWeekSelect/ModalGoalWeekSelect';
import ModalGoalIconSelect from '../ModalGoalIconSelect/ModalGoalIconSelect';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <>
        <h1>Hello</h1>
        <ModalGoalWeekSelect />
        <ModalGoalIconSelect />
      </>
    );
  }
}

export default hot(App);
