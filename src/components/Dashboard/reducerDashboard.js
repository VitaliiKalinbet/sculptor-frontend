/* eslint-disable */
import {
  weekNow,
  weekPrev,
  weekNext,
  nowMilliseconds,
  oneWeekinMilliseconds,
} from '../../utils/date';
import findActiveTaskOnWeek from '../../utils/findActiveTaskOnWeek';

const initialState = [];
const presentWeek = weekNow();

const initalWeekState = {
  date: new Date().getTime(),
  arrDays: presentWeek.map(el => ({
    data: el,
    tasks: [],
  })),
};

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

      let color = payload.goals.find(elem =>
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
      return {
        date: nowMilliseconds(),
        arrDays: findActiveTaskOnWeek(weekNow, store.date, payload),
      };
    case 'WEEK_TASKS_NEXT':
      return {
        date: store.date + oneWeekinMilliseconds,
        arrDays: findActiveTaskOnWeek(weekNext, store.date, payload),
      };
    case 'WEEK_TASKS_PREV':
      return {
        date: store.date - oneWeekinMilliseconds,
        arrDays: findActiveTaskOnWeek(weekPrev, store.date, payload),
      };
    case 'DASHBOARD_DELETE_TASK':
      const newState = store.map(day => {
        if (
          getDateWithoutTime(day.date) === getDateWithoutTime(payload.taskDate)
        ) {
          const newDayTasks = day.tasks;
          return {
            date: day.date,
            tasks: newDayTasks.splice(payload.indx, 1),
          };
        }
        return day;
      });
      return newState;
    default:
      return store;
  }
};
