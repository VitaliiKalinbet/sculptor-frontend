/* eslint-disable no-underscore-dangle */
function goalMotivation(state = '', action) {
  switch (action.type) {
    case 'INPUT_GOAL_MOTIVATION':
      if (!action.goals) {
        return action.value;
      }
      return action.goalMotivation;
    // case 'EDIT_GOAL':
    //   if (!action.id) {
    //     return '';
    //   }
    //   return (
    //     action.goals.find(el => el._id === action.id).goalMotivation || state
    //   );
    // case 'EDIT_GOAL_CANCEL':
    //   return '';
    case 'SAVE_GOAL':
      return '';
    case 'ADD_GOAL':
      return '';
    default:
      return state;
  }
}

export default goalMotivation;
