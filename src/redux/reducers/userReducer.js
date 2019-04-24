const initialState = {
  user: null,
  token: null,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      localStorage.setItem('user', JSON.stringify(action.data));
      return { ...state, user: action.data };
    case 'OK_LOGOUT':
      localStorage.setItem('user', null);
      return { ...state, user: null };
    case 'REGISTER_USER':
      return { ...state, [action.name]: action.value };
    default:
      return state;
  }
};

export default user;
