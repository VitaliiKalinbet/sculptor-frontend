import React from 'react';
import GoalList from './GoalList/GoalList';
import s from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={s.Sidebar}>
      <h2 className={s.Title}>Sculptor</h2>
      <button type="button" className={s.Btn}>
        Set a Goal
      </button>
      <GoalList />
    </div>
  );
};

export default Sidebar;
