import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './Login.css';

// import { signInWithEmailAndPassword } from '../../server';
import Grid from '@material-ui/core/Grid';
import loginInputActions from '../../redux/actions/LoginInputActions';

const styles = () => ({
  button: {
    color: '#ffffff',
    textTransform: 'capitalize',
    userSelect: 'none',
    fontSize: '1.4rem',

    transition: 'all 0.4s',

    margin: '3rem auto',

    border: 'none',
    backgroundColor: 'rgb(252, 132, 44)',
    boxShadow: '0px 4px 10px 0px rgba(252, 132, 44, 0.36)',
    width: '133px',
    height: '38px',
    // margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

const Login = ({ inputData, inputs, logedIn, classes }) => {
  const inputValidationRegEx = {
    email: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim,
    password: /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/,
  };
  const isEmailValid = inputValidationRegEx.email.test(inputs.email);
  const isPasswordValid = inputs.password.length !== 0;

  return (
    <div className="Login">
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

            <Button
              disabled={!(isEmailValid && isPasswordValid)}
              variant="contained"
              className={classes.button}
              type="submit"
              label="Login"
            >
              Login
            </Button>
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

Login.propTypes = {
  inputData: PropTypes.shape,
  inputs: PropTypes.func,
  logedIn: PropTypes.func,
  classes: PropTypes.shape.isRequired,
};

Login.defaultProps = {
  inputData: '',
  inputs: { password: '', email: '' },
  logedIn: '',
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(Login));
