import api from '../../services/api';
import { updateTaskActiveDates } from '../Dashboard/taskAction';
import { updateGoalTaskActiveDates } from '../Dashboard/goalAction';

export const changeActiveDatesInTask = ({
  taskId,
  selectedData,
  goalId,
}) => dispatch => {
  console.log(goalId);
  console.log(taskId);
  console.log(selectedData);

  api
    .updateTaskActiveDates({ taskId, taskActiveDates: selectedData })
    .then(res => {
      console.log(res.data);
      dispatch(updateGoalTaskActiveDates({ taskId, selectedData, goalId }));
      dispatch(updateTaskActiveDates({ taskId, selectedData }));
    });
};

export default { changeActiveDatesInTask };
