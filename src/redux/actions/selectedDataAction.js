export const changeSelectedData = (event, arr) => {
  console.log(event);
  console.log(arr);
  return {
    type: 'DATA_SELECTION',
    value: event,
    arr,
  };
};

export const setSelectedDates = taskDates => ({
  type: 'TASK_DATES',
  payload: taskDates,
});

export default { changeSelectedData, setSelectedDates };
