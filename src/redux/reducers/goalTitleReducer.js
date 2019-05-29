/* eslint-disable no-underscore-dangle */
function goalTitle(state = '', action) {
  switch (action.type) {
    case 'INPUT_GOAL_TITLE':
      if (!action.goals) {
        return action.value;
      }
      return action.goalTitle;
    case 'SAVE_GOAL':
      return '';
    case 'ADD_GOAL':
      return '';
    default:
      return state;
  }
}

export default goalTitle;
