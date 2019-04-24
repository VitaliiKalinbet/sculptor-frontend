/*eslint-disable*/
import React from 'react';
import { connect } from 'react-redux';
import TaskItem from '../TaskItem/TaskItem';

const TaskList = ({ data }) => {
  return (
    <ul>
      {data.map(el => (
        <TaskItem tasks={el} />
      ))}
    </ul>
  );
};

function MSTP(state) {
  return {
    tasksArray: state.tasks,
  };
}
export default connect(
  MSTP,
  null,
)(TaskList);
