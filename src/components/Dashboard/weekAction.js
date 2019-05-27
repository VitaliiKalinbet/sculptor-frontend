const weekTasksAction = data => ({
  type: 'WEEK_TASKS',
  payload: data,
});

const weekTasksActionNext = data => ({
  type: 'WEEK_TASKS_NEXT',
  payload: data,
});

const weekTasksActionPrev = data => ({
  type: 'WEEK_TASKS_PREV',
  payload: data,
});

export default {
  weekTasksAction,
  weekTasksActionNext,
  weekTasksActionPrev,
};
