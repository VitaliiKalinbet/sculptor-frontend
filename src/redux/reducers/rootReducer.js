import { combineReducers } from 'redux';

import goalMotivation from './goalMotivationReducer';
import editGoal from './goalEditModeReducer';
import goalTitle from './goalTitleReducer';
import goalTasks from './goalAddTaskReducer';
// import goals from './saveGoalReducer';
import goalNumber from './goalNumberReducer';
import goals from './initData';
import activeGoalID from './activeGoalReducer';

const rootReducer = combineReducers({
  goalMotivation,
  editGoal,
  goalTitle,
  goalTasks,
  goals,
  goalNumber,
  // initData,
  activeGoalID,
});

export default rootReducer;
