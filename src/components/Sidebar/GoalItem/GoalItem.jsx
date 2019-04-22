/*eslint-disable*/
import React from 'react';
import TaskList from '../TaskItem/TaskItem';

const GoalItem = () => {
  return (
    <li>
      <h3>Goal #</h3>
      <p>Discription</p>
      <TaskList />
    </li>
  );
};

export default GoalItem;
