/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './BackdropPicker.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import showPicker from '../../redux/actions/backDropPickerModalAction';
import dateAction from '../../redux/actions/dateAction';

const BackdropPicker = ({ children, showPickerFunc, dateActionFunc }) => {
  const allShowPickerActions = e => {
    showPickerFunc();
    dateActionFunc(e);
  };

  return (
    <div
      className="BackdropPicker"
      data-id="Backdrop"
      onClick={allShowPickerActions}
    >
      {children}
    </div>
  );
};

BackdropPicker.propTypes = {
  children: PropTypes.func.isRequired,
  showPickerFunc: PropTypes.func.isRequired,
  dateActionFunc: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    goalMotivation: state.goalData.goalMotivation,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showPickerFunc: () => dispatch(showPicker()),
    dateActionFunc: e => dispatch(dateAction(e)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BackdropPicker);
