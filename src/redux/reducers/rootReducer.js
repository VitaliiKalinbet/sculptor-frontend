import { combineReducers } from 'redux';

import editGoal from './goalEditModeReducer';
// import goals from './saveGoalReducer';
import goals from './initData';
import goalData from './goalReducer';

const rootReducer = combineReducers({
  goalData,
  editGoal,
  goals,
});

export default rootReducer;
