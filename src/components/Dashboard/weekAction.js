export const weekTasksAction = data => ({
  type: 'WEEK_TASKS',
  payload: data,
});

export const weekTasksActionNext = data => ({
  type: 'WEEK_TASKS_NEXT',
  payload: data,
});

export const weekTasksActionPrev = data => ({
  type: 'WEEK_TASKS_PREV',
  payload: data,
});

export default {
  weekTasksAction,
  weekTasksActionNext,
  weekTasksActionPrev,
};
