import { combineReducers } from 'redux';

// GET TASKS
import taskReducer from '../../components/Dashboard/reducerDashboard';

const rootReducer = combineReducers({
  tasks: taskReducer,
});

export default rootReducer;
