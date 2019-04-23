/* eslint-disable no-underscore-dangle */
const initialTaskWeekRange = [
  {
    week: 1,
    status: false,
  },
  {
    week: 2,
    status: false,
  },
  {
    week: 3,
    status: false,
  },
  {
    week: 4,
    status: false,
  },
  {
    week: 5,
    status: false,
  },
  {
    week: 6,
    status: false,
  },
  {
    week: 7,
    status: false,
  },
  {
    week: 8,
    status: false,
  },
  {
    week: 9,
    status: false,
  },
];

const initialTask = {
  taskTitle: '',
  name: String(Date.now()),
  taskWeekRange: initialTaskWeekRange,
};

const goalTasks = [
  {
    ...initialTask,
  },
];

function goalTasksFunc(state = goalTasks, action) {
  switch (action.type) {
    case 'INPUT_TASK_TITLE':
      return state.map(task => {
        return action.name === task._id || action.name === task.name
          ? { ...task, taskTitle: action.value }
          : task;
      });
    case 'DELETE_TASK':
      console.log(action);
      if (state.length === 1) {
        return goalTasks;
      }

      if (action.name.length === 13) {
        // the length of Date.now (means theese elements haven't been sent to DB yet, so they don't have _id)
        return action.goalTasks.filter(task => action.name !== task.name);
      }

      return action.goalTasks.filter(task => task._id !== action.name);
    case 'ADD_TASK':
      return [...state, { ...initialTask, name: String(Date.now()) }];
    case 'EDIT_GOAL':
      if (!action.id) {
        return state;
      }
      return action.goals.find(el => el._id === action.id).goalTasks;
    case 'EDIT_GOAL_CANCEL':
      return goalTasks;
    case 'SAVE_GOAL':
      return goalTasks;
    default:
      return state;
  }
}

export default goalTasksFunc;
