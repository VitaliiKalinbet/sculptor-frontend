import { combineReducers } from 'redux';

// GET TASKS
import {
  goalsReducer,
  taskReducer,
  weekTasksReducer,
} from '../../components/Dashboard/reducerDashboard';

const rootReducer = combineReducers({
  goals: goalsReducer,
  tasks: taskReducer,
  weekTasks: weekTasksReducer,
});

export default rootReducer;
