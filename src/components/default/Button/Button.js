import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
  button: {
    margin: 0,
  },
  button__white: {
    background: '#ff851e',
    color: '#fff2d9',
  },
  input: {
    display: 'none',
  },
  fab: {
    margin: 0,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

const CustomButton = ({
  classes,
  color,
  children,
  iconButton = false,
  //   onClick,
}) => (
  <>
    {iconButton ? (
      <IconButton
        className={classes.button}
        aria-label="Delete"
        // onClick={onClick}
      >
        {children}
      </IconButton>
    ) : (
      <Button
        variant="outlined"
        className={`${classes.button} ${classes[`button__${color}`]}`}
        // onClick={onClick}
      >
        {children}
      </Button>
    )}
  </>
);

CustomButton.propTypes = {
  classes: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number,
  }),
  color: PropTypes.string,
  iconButton: PropTypes.element,
  children: PropTypes.element.isRequired,
};

CustomButton.defaultProps = {
  classes: {},
  color: '',
  iconButton: '',
};

export default withStyles(styles)(CustomButton);
