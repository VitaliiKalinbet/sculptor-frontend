/* eslint-disable no-underscore-dangle */
function goalNumber(state = 1, action) {
  switch (action.type) {
    case 'EDIT_GOAL':
      if (!action.id && action.goals) {
        return action.goals.length + 1;
      }
      return action.goals.find(el => el._id === action.id).goalNumber;
    case 'EDIT_GOAL_CANCEL':
      return state;
    case 'SAVE_GOAL':
      return state;
    case 'ADD_GOAL':
      return state;
    default:
      return state;
  }
}

export default goalNumber;
