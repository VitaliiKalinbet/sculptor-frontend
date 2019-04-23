/*eslint-disable*/
import React from 'react';
import TaskList from '../TaskItem/TaskItem';
import s from './GoalItem.module.css';
import EditBtn from '../../BtnEditGoal/BtnEditGoal';

const GoalItem = ({ data }) => {
  return (
    <li className={s.List}>
      <div className={s.Title}>
        <span className={s.Color} />
        <h2 className={s.SubTitle}>{data.goalTitle}</h2>
        <EditBtn />
      </div>

      <p className={s.Description}>{data.goalMotivation}</p>
      <TaskList />
    </li>
  );
};

export default GoalItem;
