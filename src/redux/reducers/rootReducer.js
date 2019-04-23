import { combineReducers } from 'redux';

// GET TASKS
import {
  goalsReducer,
  taskReducer,
} from '../../components/Dashboard/reducerDashboard';

const rootReducer = combineReducers({
  goals: goalsReducer,
  tasks: taskReducer,
});

export default rootReducer;
