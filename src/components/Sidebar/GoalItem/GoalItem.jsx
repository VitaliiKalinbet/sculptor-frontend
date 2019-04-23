/*eslint-disable*/
import React from 'react';
import TaskList from '../TaskItem/TaskItem';
import s from './GoalItem.module.css';

const GoalItem = () => {
  return (
    <li>
      <div className={s.Title}>
        <span className={s.Color} />
        <h2 className={s.SubTitle}>Goal #1</h2>
        <button type="button" className={s.Btn} />
      </div>

      <p className={s.Description}>
        Lose 5 kilograms before summer holidays (June 15)
      </p>
      <TaskList />
    </li>
  );
};

export default GoalItem;
