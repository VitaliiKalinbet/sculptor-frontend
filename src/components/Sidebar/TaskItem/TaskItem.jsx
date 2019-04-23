/*eslint-disable*/
import React from 'react';
import s from './TaskItem.module.css';

const TaskItem = ({ obj }) => {
  return (
    <li>
      <p className={s.TaskText}>{obj.title}</p>
    </li>
  );
};

export default TaskItem;
