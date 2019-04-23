import { combineReducers } from 'redux';

import visibleModal from './goalEditModeReducer';
import goalMotivation from './goalMotivationReducer';
import goalTitle from './goalTitleReducer';
import goalTasks from './goalAddTaskReducer';
// import goals from './saveGoalReducer';
import goalNumber from './goalNumberReducer';
import goals from './initData';
import activeGoalID from './activeGoalReducer';

export default combineReducers({
  visibleModal,
  goalMotivation,
  // editGoal,
  goalTitle,
  goalTasks,
  goals,
  goalNumber,
  activeGoalID,
});
