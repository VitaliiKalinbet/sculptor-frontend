import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ArrowForward from '@material-ui/icons/ArrowForward';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    background: '#46617f',
    color: '#fbf3e7',
    '&:hover': {
      background: '#46617f',
    },
  },
  input: {
    display: 'none',
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

const CustomButton = ({ classes }) => (
  <Button variant="contained" color="secondary" className={classes.button}>
    Set a Goal
    <ArrowForward className={classes.rightIcon} />
  </Button>
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
