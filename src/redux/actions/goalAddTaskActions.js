const inputTaskTitle = (e, name) => ({
  type: 'INPUT_TASK_TITLE',
  value: e.target.value,
  name,
});

const deleteTask = (e, name, goalTasks) => ({
  type: 'DELETE_TASK',
  name,
  goalTasks,
});

const addTask = () => ({
  type: 'ADD_TASK',
});

export default {
  inputTaskTitle,
  deleteTask,
  addTask,
};
