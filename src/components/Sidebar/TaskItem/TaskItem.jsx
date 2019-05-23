/*eslint-disable*/
import React from 'react';
import s from './TaskItem.module.css';
import { dateAction } from '../../../redux/actions/dateAction';
import { connect } from 'react-redux';
import Picker from '../../Picker/Picker';
import calendarButton from '../../../redux/actions/calendarButtonAction';
import { th } from 'date-fns/esm/locale';
import { startOfWeek } from 'date-fns';

const TaskItem = ({ tasks, dateAction, calendarButtonFunc, taskId }) => {
  console.log('tasks: ', tasks);
  const actionCalendar = event => {
    dateAction(event);
    calendarButtonFunc();
  };

  return (
    <li className={s.Item}>
      {tasks._id === taskId && (
        <Picker tasks={tasks} actionCalendar={actionCalendar} taskId={taskId} />
      )}
      <p className={s.TaskText} data-date={tasks._id} onClick={dateAction}>
        {tasks.taskTitle}
      </p>
    </li>
  );
};

function MSTP(state) {
  return {
    taskId: state.taskArray,
  };
}

function MDTP(dispatch) {
  return {
    dateAction: function(event) {
      dispatch(dateAction(event));
    },
    calendarButtonFunc: function() {
      dispatch(calendarButton());
    },
  };
}

export default connect(
  MSTP,
  MDTP,
)(TaskItem);
