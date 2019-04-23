/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './Backdrop.css';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import toggleSetEditGoalModal from '../../redux/actions/toggleSetEditGoalModalActions';

const Backdrop = ({ children, closeModal }) => {
  return (
    <div className="Backdrop" data-id="Backdrop" onClick={e => closeModal(e)}>
      {children}
    </div>
  );
};

Backdrop.propTypes = {
  children: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    goalMotivation: state.goalMotivation,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    closeModal: e => dispatch(toggleSetEditGoalModal.closeSetEditGoalModal(e)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Backdrop);
