/*eslint-disable*/
import React from 'react';
import s from './TaskItem.module.css';
import { dateAction } from '../../../redux/actions/dateAction';
import { connect } from 'react-redux';

const TaskItem = ({ tasks, dateAction }) => {
  // console.log('tasks: ', tasks);
  return (
    <li className={s.Item}>
      <p className={s.TaskText} data-date={tasks._id} onClick={dateAction}>
        {tasks.taskTitle}
      </p>
    </li>
  );
};

function MDTP(dispatch) {
  return {
    dateAction: function(event) {
      dispatch(dateAction(event));
    },
  };
}

export default connect(
  null,
  MDTP,
)(TaskItem);
