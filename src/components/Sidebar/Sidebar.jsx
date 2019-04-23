/*eslint-disable*/
import React, { Component } from 'react';
import GoalList from './GoalList/GoalList';
import FloatingActionButtons from '../BtnCreateGoal/BtnCreateGoal';
import s from './Sidebar.module.css';
import data from './data';

class Sidebar extends Component {
  state = {
    data,
  };
  render() {
    const { data } = this.state;
    return (
      <div className={s.Sidebar}>
        <h2 className={s.Title}>Sculptor</h2>
        <FloatingActionButtons />
        <GoalList data={data} />
      </div>
    );
  }
}

export default Sidebar;
