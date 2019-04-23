import { combineReducers } from 'redux';

function editGoal(state = false, action) {
  switch (action.type) {
    case 'EDIT_GOAL':
      return true;
    case 'EDIT_GOAL_CANCEL':
      if (action.id === 'Backdrop') {
        return false;
      }
      return true;
    case 'SAVE_GOAL':
      return false;
    default:
      return state;
  }
}

export default editGoal;
