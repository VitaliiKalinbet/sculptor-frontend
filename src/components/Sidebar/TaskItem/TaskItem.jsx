import React from 'react';
import s from './TaskItem.module.css';

const TaskItem = () => {
  return (
    <li>
      <p className={s.TaskText}>
        Morning exercizes: daily run at 7:30 up to 8:00
      </p>
    </li>
  );
};

export default TaskItem;
