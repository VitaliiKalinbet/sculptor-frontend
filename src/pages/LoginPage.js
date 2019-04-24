/*eslint-disable */

import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {};
}

class LoginPage extends Component {
  render() {
    return <div>LOGIN</div>;
  }
}

export default connect(mapStateToProps)(LoginPage);
