/*eslint-disable*/
import { combineReducers } from 'redux';
import showReducer from './sidebarReducer';

const rootReducer = combineReducers({
  showReducer,
});

export default rootReducer;
