/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Arrow from '../Sidebar/svg/SvgArrow';

import NavigationIcon from '@material-ui/icons/Navigation';

const styles = theme => ({
  fab: {
    margin: '4.7rem 0 1.5rem 1.2rem',
    width: '90%',
    backgroundColor: 'transparent',
    borderRadius: '0',
    border: '1px solid #ffff',
    color: '#ffff',
    textTransform: 'capitalize',
    fontSize: '1.4rem',
    '&:hover': {
      backgroundColor: '#263f60',
      color: '#ffff',
    },
  },
  extendedIcon: {
    marginLeft: '1.6rem',
    transform: 'rotate(180deg)',
    fill: '#fff',
  },
});

function FloatingActionButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Fab
        variant="extended"
        aria-label="Delete"
        className={classes.fab}
        onClick={() => {
          console.log('click!');
        }}
      >
        Set a Goal
        <Arrow className={classes.extendedIcon} />
      </Fab>
    </div>
  );
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingActionButtons);
