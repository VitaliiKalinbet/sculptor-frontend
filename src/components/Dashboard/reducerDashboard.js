/* eslint-disable */

const initialState = [];

export const goalsReducer = (store = initialState, { type, payload }) => {
  switch (type) {
    case 'GET_GOALS':
      console.log(payload);
      return payload.data;
    default:
      return store;
  }
};

export const taskReducer = (store = initialState, { type, payload }) => {
  switch (type) {
    case 'ONLY_TASKS':
      const tasks = payload.tasksActive.map(el => el);

      console.log(payload);

      return tasks;
    default:
      return store;
  }
};
