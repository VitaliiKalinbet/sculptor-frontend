import { combineReducers } from 'redux';

// GET TASKS
import goalsReducer from '../../components/Dashboard/reducerDashboard';

const rootReducer = combineReducers({
  goals: goalsReducer,
});

export default rootReducer;
