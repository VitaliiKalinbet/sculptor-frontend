/*eslint-disable*/
import React from 'react';
import TaskItem from '../TaskItem/TaskItem';

const TaskList = ({ obj }) => {
  return (
    <ul>
      <TaskItem obj={obj} />
    </ul>
  );
};

export default TaskList;
