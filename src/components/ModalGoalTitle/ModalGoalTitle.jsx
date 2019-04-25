import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import GoalTitle from '../../redux/actions/goalTitleActions';

import './ModalGoalTitle.css';

const GoalType = styled.h5`
  display: flex;
  align-items: center;
  margin: 0;
  font-size: 1.4rem;
  color: rgba(185, 195, 200, 255);
  width: 15%;

  ::before {
    background-color: ${props => props.goalColor || 'gray'};
    content: '';
    display: block;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 1.2rem;
  }
`;

const ModalGoalTitle = ({
  inputGoalTitle,
  goalTitle,
  // goals,
  goalColor,
  goalNumber,
}) => {
  return (
    <div className="ModalGoalTitle">
      {/* <InputComponent /> from Alexey */}

      <GoalType goalColor={goalColor}>Goal #{goalNumber}</GoalType>
      <input
        className="ModalGoalTitle__input"
        type="text"
        name="ModalGoalTitle"
        id="ModalGoalTitle"
        placeholder="Enter Goal Name"
        value={goalTitle}
        onChange={inputGoalTitle}
      />
    </div>
  );
};

ModalGoalTitle.propTypes = {
  goalTitle: PropTypes.string.isRequired,
  inputGoalTitle: PropTypes.func.isRequired,
  // goals: PropTypes.arrayOf(PropTypes.object).isRequired,
  goalColor: PropTypes.string.isRequired,
  goalNumber: PropTypes.number.isRequired,
};

function mapStateToProps(state) {
  return {
    goalTitle: state.goalData.goalTitle,
    goals: state.goals,
    goalColor: state.goalData.goalColor,
    goalNumber: state.goalData.goalNumber,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    inputGoalTitle: e => dispatch(GoalTitle.inputGoalTitle(e)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalGoalTitle);
