const initialState = [];

const taskReducer = (store = initialState, action) => {
  switch (action) {
    case 'GET_TASKS':
      return action.payload;
    default:
      return store;
  }
};

export default taskReducer;
