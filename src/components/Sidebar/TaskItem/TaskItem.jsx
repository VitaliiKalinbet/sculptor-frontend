/*eslint-disable*/
import React from 'react';
import s from './TaskItem.module.css';

const TaskItem = ({ tasks }) => {
  return (
    <li className={s.Item}>
      <p className={s.TaskText}>{tasks}</p>
    </li>
  );
};

export default TaskItem;
