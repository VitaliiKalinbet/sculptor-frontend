import { combineReducers } from 'redux';
import logout from './ModalLogoutReducer';
import isLogoutModalOpen from './ToggleLogoutModalReducer';

import editGoal from './goalEditModeReducer';
// import goals from './saveGoalReducer';
import goals from './initData';
import goalData from './goalReducer';

const rootReducer = combineReducers({
  goalData,
  editGoal,
  goals,
  logout,
  isLogoutModalOpen,
});

export default rootReducer;
