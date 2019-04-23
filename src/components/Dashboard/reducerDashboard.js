const initialState = [];

const goalsReducer = (store = initialState, { type, payload }) => {
  switch (type) {
    case 'GET_GOALS':
      return payload.data;
    default:
      return store;
  }
};

export default goalsReducer;
