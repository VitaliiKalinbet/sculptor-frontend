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
const ModalGoalWeekSelect = ({ onChange, goalColor, id, task }) => {
  const styles = {
    small: {
      width: 32,
      height: 32,
      color: goalColor || '#dee5e8',
    },
    medium: {
      width: 48,
      height: 48,
      color: goalColor || '#dee5e8',
    },
    large: {
      width: 60,
      height: 60,
      color: goalColor || '#dee5e8',
    },
  };
  return (
    <div className="checkbox_container">
      {task.taskWeekRange.map(el => {
        return (
          <div className="checkbox" key={el.week}>
            <FormControlLabel
              control={
                <Checkbox
                  icon={
                    <RadioButtonUnchecked color="inherit" fontSize="large" />
                  }
                  checkedIcon={<Lens fontSize="large" color="inherit" />}
                  onChange={onChange}
                  name={el.week - 1}
                  style={styles.small}
                  value={id}
                />
              }
              label={el.week}
            />
          </div>
        );
      })}
    </div>
  );
};

function MSTP(state) {
  return {
    goalColor: state.goalData.goalColor,
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
  goalColor: PropTypes.string.isRequired,
};

export default connect(
  MSTP,
  MDTP,
)(ModalGoalWeekSelect);
