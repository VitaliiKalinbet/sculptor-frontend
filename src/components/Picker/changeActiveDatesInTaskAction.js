export const changeActiveDatesInTask = ({
  taskId,
  selectedData,
  goalId,
}) => dispatch => {
  console.log(goalId);
  console.log(taskId);
  console.log(selectedData);
  dispatch({
    type: 'TASKS_CHANGE_ACTIVE_DATES_IN_TASK',
    taskId,
    goalId,
    selectedData,
  });
};

export default { changeActiveDatesInTask };
