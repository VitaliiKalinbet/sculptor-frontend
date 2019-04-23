/*eslint-disable*/
import React, { Component } from 'react';
import GoalList from './GoalList/GoalList';
import CreateBtn from '../BtnCreateGoal/BtnCreateGoal';
import s from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={s.Sidebar}>
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

export default Sidebar;
