import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Registration.css';

// import { signInWithEmailAndPassword } from '../../server';
import Grid from '@material-ui/core/Grid';
import loginInputActions from '../../redux/actions/LoginInputActions';

const Registration = ({ inputData, inputs, logedIn }) => {
  const inputValidationRegEx = {
    email: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim,
    password: /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/,
  };
  const isEmailValid = inputValidationRegEx.email.test(inputs.email);
  const isPasswordValid = inputs.password.length !== 0;

  return (
    <div className="Registration">
      <Grid>
        <Grid item xs={4}>
          <form
            onSubmit={e => {
              e.preventDefault();
              //   signInWithEmailAndPassword(inputs.email, inputs.password).then(uid =>
              //     logedIn(uid).catch(err => console.log('BAD')),
              //   );
              // logedIn();
              console.log(logedIn);
            }}
            className="form flex-column center-box shadow max-width-500 padding-all-25"
            method="post"
          >
            <h2 className="h2 text-center">Sculptor</h2>
            <input
              onChange={e => inputData(e)}
              value={inputs.email}
              className={
                inputs.email.length > 0
                  ? `form-input ${
                      isEmailValid ? 'input__valid' : 'input__invalid'
                    }`
                  : 'form-input'
              }
              type="email"
              name="email"
              placeholder="Email Address *"
            />

            <input
              onChange={e => inputData(e)}
              value={inputs.password}
              className={
                inputs.password.length > 0
                  ? `form-input ${
                      isPasswordValid ? 'input__valid' : 'input__invalid'
                    }`
                  : 'form-input'
              }
              type="password"
              name="password"
              placeholder="Password *"
            />

            <button
              disabled={!(isEmailValid && isPasswordValid)}
              className="btn"
              type="submit"
              label="Login"
            >
              Login
            </button>
            <p className="text-center">
              <NavLink to="/register" className="link">
                Register
              </NavLink>
            </p>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    inputs: state.inputs,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    inputData: e => dispatch(loginInputActions.inputData(e)),
    logedIn: uid => dispatch(loginInputActions.logedIn(uid)),
  };
}

Registration.propTypes = {
  inputData: PropTypes.shape,
  inputs: PropTypes.func,
  logedIn: PropTypes.func,
};

Registration.defaultProps = {
  inputData: '',
  inputs: { password: '', email: '' },
  logedIn: '',
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Registration);
