/*eslint-disable*/
import React from 'react';
import s from './TaskItem.module.css';
import dateAction from '../../../redux/actions/dateAction';
import { connect } from 'react-redux';
import Picker from '../../Picker/Picker';
import calendarButton from '../../../redux/actions/calendarButtonAction';
import { th } from 'date-fns/esm/locale';
import { startOfWeek } from 'date-fns';
import Backdrop from '../../Backdrop/Backdrop';
import showPicker from '../../../redux/actions/backDropPickerModalAction';
import BackdropPicker from '../../BackdropPicker/BackdropPicker';

const TaskItem = ({
  tasks,
  dateAction,
  calendarButtonFunc,
  taskId,
  flagShowPiker,
  showPicker,
}) => {
  console.log('tasks: ', tasks);
  const actionCalendar = event => {
    dateAction(event);
    calendarButtonFunc();
  };
  const showPickerAllActions = (event, boolean) => {
    showPicker(boolean);
    dateAction(event);
  };

  return (
    <li className={s.Item}>
      {tasks._id === taskId && flagShowPiker && (
        <BackdropPicker>
          <Picker
            tasks={tasks}
            actionCalendar={actionCalendar}
            taskId={taskId}
          />
        </BackdropPicker>
      )}
      <p
        className={s.TaskText}
        data-date={tasks._id}
        onClick={showPickerAllActions}
      >
        {tasks.taskTitle}
      </p>
    </li>
  );
};

function MSTP(state) {
  return {
    taskId: state.taskArray,
    flagShowPiker: state.backDropPickerFlag,
  };
}

function MDTP(dispatch) {
  return {
    showPicker: function() {
      dispatch(showPicker());
    },
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
