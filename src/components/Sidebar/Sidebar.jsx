/*eslint-disable*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CreateBtn from '../BtnCreateGoal/BtnCreateGoal';
import GoalList from './GoalList/GoalList';
import setTask from '../Button/SetButton/SetButton';
import SetEditGoalModal from '../../redux/actions/toggleSetEditGoalModalActions';

import { showSidebarAction } from '../../redux/actions/sidebarAction';

import { ReactComponent as More } from '../../assets/images/icons/more/baseline-more_vert-24px.svg';

import s from './Sidebar.module.css';

const Sidebar = ({
  showSidebar,
  openModal,
  goals,
  btnID,
  showSidebarAction,
  isSetGoalActive,
}) => {
  return (
    <div
      className={`${s.Sidebar} ${
        showSidebar && !isSetGoalActive ? s.Sidebar_show : ''
      }`}
    >
      {showSidebar && (
        <More onClick={showSidebarAction} className={s.closeSidebar} />
      )}

      <h2 className={s.Title}>
        <a className={s.Link} href="#">
          Sculptor
        </a>
      </h2>
      <CreateBtn onClick={e => openModal(e, goals, 'SET')} value={btnID} />
      <GoalList />
    </div>
  );
};

Sidebar.propTypes = {
  openModal: PropTypes.func.isRequired,
  // editGoal: PropTypes.bool.isRequired,
  goals: PropTypes.arrayOf(PropTypes.object).isRequired,
  btnID: PropTypes.string.isRequired,
};

const MSTP = state => {
  return {
    showSidebar: state.app.showSidebar,
    btnID: state.goalData.goalTasks[0].id,
    goals: state.goals,
    isSetGoalActive: state.editGoal.editing,
  };
};

function MDTP(dispatch) {
  return {
    openModal: (e, goals, type) =>
      dispatch(SetEditGoalModal.openSetEditGoalModal(e, goals, type)),
    showSidebarAction: () => dispatch(showSidebarAction()),
  };
}

export default connect(
  MSTP,
  MDTP,
)(Sidebar);
