/*eslint-disable*/
import { combineReducers } from 'redux';
import selectedData from '../reducers/selectedDataReducer';

const rootReducer = combineReducers({
  selectedData,
  userTaskDate,
  userDisabledArray,
});

export default rootReducer;
