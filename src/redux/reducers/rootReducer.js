/*eslint-disable*/
import { combineReducers } from 'redux';
import showReducer from './sidebarReducer';
import activeDateReducer from './datePickerReducer';
import {
  goalsReducer,
  taskReducer,
  weekTasksReducer,
} from '../../components/Dashboard/reducerDashboard';

const rootReducer = combineReducers({
  goals: goalsReducer,
  tasks: taskReducer,
  weekTasks: weekTasksReducer,
  showReducer,
  activeDateReducer,
});

export default rootReducer;
