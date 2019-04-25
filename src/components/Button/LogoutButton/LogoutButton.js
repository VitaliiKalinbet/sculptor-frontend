import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const styles = () => ({
  button: {
    background: '#fff',
    color: '#494949',
    width: 100,
    fontSize: 14,
    textTransform: 'capitalize ',
    boxShadow: 0,
    borderRadius: 0,

    '&:hover': {
      background: '#ff851e',
      color: '#fff',
      fontWeight: 600,
    },
  },
  input: {
    display: 'none',
  },
});

const LogoutButton = ({ classes, onClick, value, children }) => (
  <>
    <Button
      variant="contained"
      className={classes.button}
      onClick={onClick}
      value={value}
    >
      {children}
    </Button>
  </>
);

LogoutButton.propTypes = {
  classes: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number,
  }),
  children: PropTypes.element.isRequired,
  onClick: PropTypes.element.isRequired,
  value: PropTypes.element.isRequired,
};
LogoutButton.defaultProps = {
  classes: {},
};

export default withStyles(styles)(LogoutButton);
