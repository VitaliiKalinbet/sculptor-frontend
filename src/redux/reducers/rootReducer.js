/*eslint-disable*/
import { combineReducers } from 'redux';
import showReducer from './sidebarReducer';
import activeDateReducer from './datePickerReducer';
import {
  goalsReducer,
  taskReducer,
  weekTasksReducer,
} from '../../components/Dashboard/reducerDashboard';
import editGoal from './goalEditModeReducer';
import goalData from './goalReducer';
import goals from './initData';

const rootReducer = combineReducers({
  goals: goalsReducer,
  tasks: taskReducer,
  weekTasks: weekTasksReducer,
  showReducer,
  activeDateReducer,
  goalData,
  editGoal,
  goals,
});

export default rootReducer;
