import { combineReducers } from 'redux';

import editGoal from './goalEditModeReducer';
// import goals from './saveGoalReducer';
import goals from './initData';
import goalData from './goalReducer';
// import goalMotivation from './goalMotivationReducer';
// import goalNumber from './goalNumberReducer';
// import goalTitle from './goalTitleReducer';
// import goalTasks from './goalAddTaskReducer';
// import activeGoalID from './activeGoalReducer';

const rootReducer = combineReducers({
  goalData,
  editGoal,
  goals,
  // initData,
});

export default rootReducer;
