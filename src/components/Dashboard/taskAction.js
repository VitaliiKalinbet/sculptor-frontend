/* eslint-disable */
import api from '../../services/api';
import { updateWeekTasks } from './weekAction';

const getTasks = data => ({
  type: 'ONLY_TASKS',
  payload: data,
});

export const asyncTasksAction = ({ userId, token }) => dispatch => {
  api
    .getGoals({
      userId,
      token,
    })
    .then(data => {
      dispatch(getTasks(data));
    })
    .catch(error => console.log(error));
};

export const updateTaskActiveDates = ({ taskId, selectedData }) => (
  dispatch,
  getState,
) => {
  const state = getState();
  dispatch({
    type: 'TASKS_CHANGE_ACTIVE_DATES_IN_TASK',
    taskId,
    selectedData,
  });
  dispatch(
    updateWeekTasks({ selectedTime: state.weekTasks.date, tasks: state.tasks }),
  );
};

export default { asyncTasksAction, updateTaskActiveDates };
