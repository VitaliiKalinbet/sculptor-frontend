import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Delete from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

const CustomButton = ({ classes }) => (
  <IconButton aria-label="Delete" className={classes.margin}>
    <Delete fontSize="small" />
  </IconButton>
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
