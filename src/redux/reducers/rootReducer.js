import { combineReducers } from 'redux';
import weekRange from './checkboxReducer';
import goalColor from './radioReducer';

const rootReducer = combineReducers({
  weekRange,
  goalColor,
});

export default rootReducer;
