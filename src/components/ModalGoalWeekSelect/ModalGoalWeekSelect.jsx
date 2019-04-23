import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import RadioButtonUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import Lens from '@material-ui/icons/Lens';
import { checkboxAction } from '../../redux/actions/checkboxAction';

import './ModalGoalWeekSelect.css';

// eslint-disable-next-line react/prop-types
const ModalGoalWeekSelect = ({ onChange, weekRange, goalColor }) => {
  const styles = {
    small: {
      width: 36,
      height: 36,
      color: goalColor,
    },
    medium: {
      width: 48,
      height: 48,
      color: goalColor,
    },
    large: {
      width: 60,
      height: 60,
      color: goalColor,
    },
  };
  return (
    <div className="checkbox_container">
      {weekRange.map(el => {
        // eslint-disable-next-line no-console
        console.log('radioReducer', goalColor);
        return (
          <div className="checkbox" key={el.week}>
            <FormControlLabel
              control={
                <Checkbox
                  icon={
                    <RadioButtonUnchecked color="inherit" fontSize="large" />
                  }
                  checkedIcon={<Lens fontSize="large" />}
                  onChange={onChange}
                  name={el.week - 1}
                  style={styles.small}
                />
              }
              label={el.week}
              // weekRange={weekRange}
            />
          </div>
        );
      })}
    </div>
  );
};

function MSTP(state) {
  return {
    weekRange: state.weekRange,
    goalColor: state.goalColor,
  };
}

function MDTP(dispatch) {
  return {
    onChange(e) {
      dispatch(checkboxAction(e));
    },
  };
}

ModalGoalWeekSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  weekRange: PropTypes.arrayOf(PropTypes.objects).isRequired,
  goalColor: PropTypes.string.isRequired,
};

export default connect(
  MSTP,
  MDTP,
)(ModalGoalWeekSelect);
