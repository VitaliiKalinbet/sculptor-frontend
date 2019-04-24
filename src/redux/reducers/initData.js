/* eslint-disable no-underscore-dangle */
import data from '../../data';

function initData(state = data, action) {
  switch (action.type) {
    case 'SAVE_GOAL':
      return action.goals.map(goal =>
        goal._id === action.updatedGoal.activeGoalID
          ? { ...goal, ...action.updatedGoal }
          : goal,
      );
    case 'ADD_GOAL':
      return [...state, action.updatedGoal];
    default:
      return state;
  }
}

export default initData;
