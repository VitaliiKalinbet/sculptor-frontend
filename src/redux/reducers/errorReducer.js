/* eslint-disable no-underscore-dangle */
function errorReducer(state = '', action) {
  switch (action.type) {
    case 'ADD_ERROR_IN_STORE':
      console.log('ADD_ERROR_IN_STORE work');
      return action.error;
    case 'DELETE_ERROR_FROM_STORE':
      console.log('DELETE_ERROR_FROM_STORE work');
      return '';
    default:
      return state;
  }
}

export default errorReducer;
