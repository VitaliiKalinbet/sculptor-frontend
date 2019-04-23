/*eslint-disable*/
import React, { Component } from 'react';
import GoalList from './GoalList/GoalList';
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
        <button type="button" className={s.Btn}>
          Set a Goal
        </button>
        <GoalList data={data} />
      </div>
    );
  }
}

export default Sidebar;
