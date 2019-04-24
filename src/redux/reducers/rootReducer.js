/*eslint-disable*/
import { combineReducers } from 'redux';
import selectedData from '../reducers/selectedDataReducer';
import userTaskDate from '../reducers/userTaskDateReducer';
import calendarButton from '../reducers/calendarButtonReducer';
import app from './appReducer';
import activeDateReducer from './datePickerReducer';
import {
  goalsReducer,
  taskReducer,
  weekTasksReducer,
} from '../../components/Dashboard/reducerDashboard';
import logout from './ModalLogoutReducer';
import isLogoutModalOpen from './ToggleLogoutModalReducer';
import editGoal from './goalEditModeReducer';
import goalData from './goalReducer';

import goals from './initData';
import dateReducer from './dateReducer';

const rootReducer = combineReducers({
  selectedData,
  userTaskDate,
  calendarButton,
  goals: goalsReducer,
  tasks: taskReducer,
  weekTasks: weekTasksReducer,
  app,
  activeDateReducer,
  goalData,
  editGoal,
  goals,
  taskArray: dateReducer,
  logout,
  isLogoutModalOpen,
});

export default rootReducer;
