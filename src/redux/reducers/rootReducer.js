import { combineReducers } from 'redux';
import logout from './ModalLogoutReducer';
import isLogoutModalOpen from './ToggleLogoutModalReducer';

const rootReducer = combineReducers({
  logout,
  isLogoutModalOpen,
});

export default rootReducer;
