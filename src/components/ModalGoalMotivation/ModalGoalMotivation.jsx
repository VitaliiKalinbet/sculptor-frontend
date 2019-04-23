import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Motivation from '../../redux/actions/goalMotivationActions';

import './ModalGoalMotivation.css';

const ModalGoalMotivation = ({ inputMotivation, goalMotivation }) => {
  return (
    <div className="ModalGoalMotivation">
      <label htmlFor="inputMotivation" className="GoalMotivation__label">
        Motivation
        <input
          type="text"
          name="inputMotivation"
          id="inputMotivation"
          onChange={inputMotivation}
          value={goalMotivation}
        />
      </label>
    </div>
  );
};

ModalGoalMotivation.propTypes = {
  inputMotivation: PropTypes.func.isRequired,
  goalMotivation: PropTypes.string,
};

ModalGoalMotivation.defaultProps = {
  goalMotivation: '',
};

function mapStateToProps(state) {
  return {
    goalMotivation: state.goalMotivation,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    inputMotivation: e => dispatch(Motivation.inputMotivation(e)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalGoalMotivation);
