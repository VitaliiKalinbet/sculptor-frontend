/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { showSidebarAction } from '../../redux/actions/sidebarAction';
import s from './SidebarBackdrop.module.css';

const SidebarBackdrop = ({ children, closeSidebar }) => {
  return (
    <div
      className={s.Backdrop}
      data-id="Backdrop"
      onClick={() => {
        closeSidebar();
      }}
    >
      {children}
    </div>
  );
};

SidebarBackdrop.propTypes = {
  children: PropTypes.func.isRequired,
  closeSidebar: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    goalMotivation: state.goalData.goalMotivation,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    closeSidebar: () => dispatch(showSidebarAction()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SidebarBackdrop);
