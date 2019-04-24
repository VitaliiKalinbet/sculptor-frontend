/*eslint-disable*/
import React, { Component } from 'react';
import GoalList from './GoalList/GoalList';
import CreateBtn from '../BtnCreateGoal/BtnCreateGoal';
import { connect } from 'react-redux';
import s from './Sidebar.module.css';

const Sidebar = ({ showSidebar }) => {
  return (
    <div className={`${s.Sidebar} ${showSidebar ? s.Sidebar_show : ''}`}>
      <h2 className={s.Title}>
        <a className={s.Link} href="#">
          Sculptor
        </a>
      </h2>
      <CreateBtn />
      <GoalList />
    </div>
  );
};

const MSTP = store => {
  return {
    showSidebar: store.app.showSidebar,
  };
};

export default connect(
  MSTP,
  null,
)(Sidebar);
