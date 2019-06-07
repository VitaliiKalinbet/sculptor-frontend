import api from '../../services/api';
import toggleSetEditGoalModal from './toggleSetEditGoalModalActions';
import goalMotivationActions from './goalMotivationActions';
import goalTitleActions from './goalTitleActions';
import goalAddTaskActions from './goalAddTaskActions';
import { radioActionClearColor } from './radioAction';
import { deleteFrozenGoalTasksInEditAction } from './frozenGoalTasksInEditAction';

const deleteGoalFromState = idGoal => ({
  type: 'DELETE_GOAL',
  idGoal,
});

const asyncDeleteGoal = goalId => dispatch => {
  api
    .deleteGoalFromDb(goalId)
    .then(data => {
      if (data.data.success) {
        dispatch(deleteGoalFromState(goalId));
        dispatch(goalMotivationActions.inputMotivationClear());
        dispatch(goalTitleActions.inputGoalTitleClear());
        dispatch(goalAddTaskActions.inputTaskTitleClear());
        dispatch(radioActionClearColor());
        dispatch(deleteFrozenGoalTasksInEditAction());
        dispatch(toggleSetEditGoalModal.closeEditGoalModal());
      } else {
        // eslint-disable-next-line no-console
        console.log('!!! error message action is dispatched here !!!');
      }
    })
    // eslint-disable-next-line no-console
    .catch(error => console.log(error));
};

export default {
  asyncDeleteGoal,
};
