/*eslint-disable*/
import { combineReducers } from 'redux';
import showReducer from './sidebarReducer';
import activeDateReducer from './datePickerReducer';

const rootReducer = combineReducers({
  showReducer,
  activeDateReducer,
});

export default rootReducer;
