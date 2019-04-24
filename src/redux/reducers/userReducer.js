const initialState = {
  user: null,
  token: null,
};

const inputs = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return { ...state, [action.name]: action.value };
    case 'LOGOUT_USER':
      return { ...state, [action.name]: action.value };
    case 'REGISTER_USER':
      return { ...state, [action.name]: action.value };
    default:
      return state;
  }
};

export default inputs;
