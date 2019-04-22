const initialState = [];

const taskReducer = (store = initialState, { type, payload }) => {
  switch (type) {
    case 'GET_TASKS':
      return payload.data;
    default:
      return store;
  }
};

export default taskReducer;
