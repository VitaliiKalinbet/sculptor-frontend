import { combineReducers } from 'redux';
import inputs from './inputReducer';

const rootReducer = combineReducers({
  inputs,
});

export default rootReducer;
