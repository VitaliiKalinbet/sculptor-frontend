/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { hot } from 'react-hot-loader/root';
import './App.css';
import ModalLogout from '../ModalLogout/ModalLogout';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const { isLogoutModalOpen } = this.props;
    return (
      <>
        <h1>Hello</h1>
        <ModalLogout />
      </>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     isLogoutModalOpen: state.toggleLogoutModal,
//   };
// }

// export default hot(connect(mapStateToProps)(App));
export default hot(App);
