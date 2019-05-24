/* eslint-disable */
import { weekNow } from '../../utils/date';

const initialState = [];
const presentWeek = weekNow();
const initalWeekState = presentWeek.map(el => ({
  data: el,
  tasks: [],
}));

const getDateWithoutTime = time =>
  new Date(new Date(time).setHours(0, 0, 0, 0)).getTime();

export const goalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GOALS':
      return action.payload;
    case 'SAVE_GOAL':
      return state.map(goal =>
        goal._id === action.updatedGoal.activeGoalID
          ? {
              ...goal,
              ...action.updatedGoal,
            }
          : goal,
      );
    case 'ADD_GOAL':
      return [...state, action.updatedGoal];
    default:
      return state;
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

      tasks = tasks.map(el => ({
        ...el,
        color,
      }));

      return tasks;
    default:
      return store;
  }
};

export const weekTasksReducer = (
  store = initalWeekState,
  { type, payload },
) => {
  switch (type) {
    case 'WEEK_TASKS':
      const weeksMilliseconds = presentWeek.map(el =>
        getDateWithoutTime(new Date(el).getTime()),
      );
      const allTasks = [...payload];

      // console.log('tasks', allTasks);
      const activeTasksData = presentWeek.map(el => ({
        data: el,
        tasks: [],
      }));
      const activeTasks = [];
      const updateTasks = allTasks.forEach(task => {
        if (task.activeDays) {
          return task.activeDays.map(el =>
            activeTasks.push({
              id: task.id,
              color: task.color,
              goalId: task.goalId,
              isComplete: task.isComplete,
              title: task.title,
              date: el,
            }),
          );
        }
      });

      // console.log('activeTasks', activeTasks);
      // console.log('weeksMilliseconds', weeksMilliseconds);
      const weekData = activeTasks.map(el => {
        console.log(getDateWithoutTime(el.date));
        const index = weeksMilliseconds.indexOf(
          getDateWithoutTime(new Date(el.date).getTime()),
        );
        if (index !== -1) {
          activeTasksData[index].tasks.push(el);
        }
      });

      // console.log('activeTasksData', activeTasksData);

      // const dayTasks = [];
      // let idx = false;
      // let taskidx;

      // presentWeek.forEach(elem => {
      //   idx = false;

      //   allTasks.forEach(task => {
      //     task.activeDays.forEach(subtask => {
      //       if (
      //         subtask.getDay() === elem.getDay() &&
      //         subtask.getMonth() === elem.getMonth() &&
      //         subtask.getYear() === elem.getYear()
      //       ) {
      //         idx = true;
      //         taskidx = {
      //           id: task.id,
      //           color: task.color,
      //           goalId: task.goalId,
      //           isComplete: task.isComplete,
      //           title: task.title,
      //         };
      //       }
      //     });
      //   });

      //   return idx
      //     ? dayTasks.push({ tasks: [taskidx], data: elem })
      //     : dayTasks.push({ data: elem });
      // });

      // return dayTasks;

      return activeTasksData;
    case 'DASHBOARD_DELETE_TASK':
      // console.log('payload', payload);
      // console.log('store', store);
      const newState = store.map(day => {
        if (
          getDateWithoutTime(day.date) === getDateWithoutTime(payload.taskDate)
        ) {
          // console.log('newDayTasks', day.tasks);
          const newDayTasks = day.tasks;
          return {
            date: day.date,
            tasks: newDayTasks.splice(payload.indx, 1),
          };
        }
        return day;
      });
      // console.log('newState', newState);

      return newState;

    default:
      return store;
  }
};
