/* eslint-disable */
import {
  weekNow,
  weekPrev,
  weekNext,
  weekExented,
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
    case 'GOALS_CHANGE_ACTIVE_DATES_IN_TASK':
      return state.map(goal => {
        console.log(goal);
        if (goal._id === action.goalId) {
          const goalTasks = goal.goalTasks.map(task => {
            console.log(task);
            if (task._id === action.taskId) {
              return { ...task, taskActiveDates: action.selectedData };
            } else {
              return task;
            }
          });
          return { ...goal, goalTasks };
        } else {
          return goal;
        }
      });
    default:
      return state;
  }
};

export const taskReducer = (store = initialState, action) => {
  switch (action.type) {
    case 'ONLY_TASKS':
      const tasks = action.payload.tasks.map(el => {
        const color = action.payload.goals.find(elem => elem._id === el.goalId)
          .goalColor;

        return {
          id: el._id,
          title: el.taskTitle,
          isComplete: el.isComplete,
          goalId: el.goalId,
          activeDays: el.taskActiveDates.map(el => new Date(el.date)),
          color,
        };
      });

      return tasks;
    case 'TASKS_CHANGE_ACTIVE_DATES_IN_TASK':
      return store.map(task => {
        console.log(task);
        if (task.id === action.taskId) {
          return {
            ...task,
            activeDays: action.selectedData.map(el => new Date(el.date)),
          };
        } else {
          return task;
        }
      });
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
      console.log('GO');
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
    case 'UPDATE_WEEK_TASKS':
      return {
        date: payload.selectedTime,
        arrDays: findActiveTaskOnWeek(
          weekExented,
          new Date(payload.selectedTime).getTime(),
          payload.tasks,
        ),
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
