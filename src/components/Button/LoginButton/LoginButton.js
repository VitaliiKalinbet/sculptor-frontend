import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const styles = () => ({
  button: {
    background: '#ff851e',
    color: '#fffaf7',
    // height: 100,
    width: 100,
    fontSize: 14,
    textTransform: 'capitalize ',
  },
  input: {
    display: 'none',
  },
});

const CustomButton = ({ classes }) => (
  <>
    <Button variant="contained" className={classes.button}>
      Login
    </Button>
  </>
);

CustomButton.propTypes = {
  classes: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number,
  }),
};
CustomButton.defaultProps = {
  classes: {},
};

export default withStyles(styles)(CustomButton);
