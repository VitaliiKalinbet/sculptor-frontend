/* eslint-disable no-underscore-dangle */
function goalTitle(state = '', action) {
  switch (action.type) {
    case 'INPUT_GOAL_TITLE':
      if (!action.goals) {
        return action.value;
      }
      return action.goalTitle;
    case 'EDIT_GOAL':
      if (!action.id) {
        return '';
      }
      return action.goals.find(el => el._id === action.id).goalTitle;
    case 'EDIT_GOAL_CANCEL':
      return '';
    case 'SAVE_GOAL':
      return '';
    case 'ADD_GOAL':
      return '';
    default:
      return state;
  }
}

export default goalTitle;
