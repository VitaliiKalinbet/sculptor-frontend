const initialState = {
  user: null,
  token: null,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return { ...state, user: action.data };
    case 'LOGOUT_USER':
      return { ...state, user: null };
    case 'REGISTER_USER':
      return { ...state, [action.name]: action.value };
    default:
      return state;
  }
};

export default user;
