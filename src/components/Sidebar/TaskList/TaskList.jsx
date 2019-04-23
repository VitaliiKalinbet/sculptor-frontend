/*eslint-disable*/
import React from 'react';
import { connect } from 'react-redux';
import TaskItem from '../TaskItem/TaskItem';

const TaskList = ({ goalsArray }) => {
  console.log('goalsArray: ', goalsArray);
  const tasksArray = goalsArray.map(el => [...el.goalTasks]);
  console.log('tasksArray: ', tasksArray); // доделать прокидывание тасков. Пока не то, массив в массиве.
  return (
    <ul>
      {tasksArray.map(el => (
        <TaskItem tasks={el} />
      ))}
    </ul>
  );
};

function MSTP(state) {
  return {
    goalsArray: state.goals,
  };
}
export default connect(
  MSTP,
  null,
)(TaskList);
