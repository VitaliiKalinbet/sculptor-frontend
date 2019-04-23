/* eslint-disable */
import { weekNow } from '../../utils/date';

const initialState = [];

export const goalsReducer = (store = initialState, { type, payload }) => {
  switch (type) {
    case 'GET_GOALS':
      return payload.data;
    default:
      return store;
  }
};

export const taskReducer = (store = initialState, { type, payload }) => {
  switch (type) {
    case 'ONLY_TASKS':
      let tasks = payload.tasks.map(el => ({
        id: el._id,
        title: el.taskTitle,
        isComplete: el.isComplete,
        goalId: el.goalId,
        activeDays: el.taskActiveDates.map(el => new Date(el.date)),
      }));

      let color = payload.data.find(elem =>
        tasks.filter(el => el.id.includes(elem)),
      ).goalColor;

      tasks = tasks.map(el => ({ ...el, color }));

      return tasks;
    default:
      return store;
  }
};

export const weekTasksReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'WEEK_TASKS':
      const presentWeek = weekNow();
      const allTasks = payload;

      const dayTasks = [];
      let idx = false;
      let taskidx;

      presentWeek.forEach(elem => {
        idx = false;

        allTasks.forEach(task => {
          task.activeDays.forEach(subtask => {
            if (
              subtask.getDay() === elem.getDay() &&
              subtask.getMonth() === elem.getMonth() &&
              subtask.getYear() === elem.getYear()
            ) {
              idx = true;
              taskidx = {
                id: task.id,
                color: task.color,
                goalId: task.goalId,
                isComplete: task.isComplete,
                title: task.title,
              };
            }
          });
        });

        return idx
          ? dayTasks.push({ ...taskidx, data: elem })
          : dayTasks.push({ data: elem });
      });

      return dayTasks;
    default:
      return state;
  }
};
