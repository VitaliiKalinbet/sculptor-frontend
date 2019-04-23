/*eslint-disable*/
import React from 'react';
import TaskList from '../TaskItem/TaskItem';
import s from './GoalItem.module.css';
import EditBtn from '../../BtnEditGoal/BtnEditGoal';

const GoalItem = ({ obj }) => {
  return (
    <li className={s.List}>
      <div className={s.Title}>
        <span className={s.Color} />
        <h2 className={s.SubTitle}>{obj.title}</h2>
        <EditBtn />
      </div>

      <p className={s.Description}>{obj.description}</p>
      {obj.tasks.map(el => (
        <TaskList obj={el} />
      ))}
    </li>
  );
};

export default GoalItem;
