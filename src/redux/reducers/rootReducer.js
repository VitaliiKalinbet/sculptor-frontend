/*eslint-disable*/
import { combineReducers } from 'redux';
import selectedData from '../reducers/selectedDataReducer';
import userTaskDate from '../reducers/userTaskDateReducer';
import calendarButton from '../reducers/calendarButtonReducer';
import {
  goalsReducer,
  taskReducer,
  weekTasksReducer,
} from '../../components/Dashboard/reducerDashboard';

const rootReducer = combineReducers({
  selectedData,
  userTaskDate,
  calendarButton,
  goals: goalsReducer,
  tasks: taskReducer,
  weekTasks: weekTasksReducer,
});

export default rootReducer;
