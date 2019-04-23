import { combineReducers } from 'redux';

import goalMotivation from './goalMotivationReducer';
import goalTitle from './goalTitleReducer';
import goalTasks from './goalAddTaskReducer';
// import goals from './saveGoalReducer';
import goalNumber from './goalNumberReducer';
import activeGoalID from './activeGoalReducer';

export default combineReducers({
  goalNumber,
  goalTitle,
  goalTasks,
  goalMotivation,
  activeGoalID,
});
