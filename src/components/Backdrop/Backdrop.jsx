/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './Backdrop.css';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import toggleSetEditGoalModal from '../../redux/actions/toggleSetEditGoalModalActions';
import goalMotivationActions from '../../redux/actions/goalMotivationActions';
import goalTitleActions from '../../redux/actions/goalTitleActions';
import goalAddTaskActions from '../../redux/actions/goalAddTaskActions';
import { radioActionClearColor } from '../../redux/actions/radioAction';

const Backdrop = ({
  children,
  closeModal,
  inputMotivationClear,
  inputGoalTitleClear,
  inputTaskTitleClear,
  clearColor,
}) => {
  return (
    <div
      className="Backdrop"
      data-id="Backdrop"
      onClick={e => {
        closeModal(e);
        inputMotivationClear();
        inputGoalTitleClear();
        inputTaskTitleClear();
        clearColor();
      }}
    >
      {children}
    </div>
  );
};

Backdrop.propTypes = {
  children: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  inputMotivationClear: PropTypes.func.isRequired,
  inputGoalTitleClear: PropTypes.func.isRequired,
  inputTaskTitleClear: PropTypes.func.isRequired,
  clearColor: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    goalMotivation: state.goalData.goalMotivation,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    closeModal: e => dispatch(toggleSetEditGoalModal.closeSetEditGoalModal(e)),
    inputMotivationClear: () =>
      dispatch(goalMotivationActions.inputMotivationClear()),
    inputGoalTitleClear: () => dispatch(goalTitleActions.inputGoalTitleClear()),
    inputTaskTitleClear: () =>
      dispatch(goalAddTaskActions.inputTaskTitleClear()),
    clearColor: () => dispatch(radioActionClearColor()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Backdrop);
