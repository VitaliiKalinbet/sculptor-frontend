/*eslint-disable*/
import { combineReducers } from 'redux';
import app from './appReducer';
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
  app,
  activeDateReducer,
  goalData,
  editGoal,
  goals,
});

export default rootReducer;
