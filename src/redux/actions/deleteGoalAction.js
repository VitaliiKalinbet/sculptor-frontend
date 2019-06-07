import api from '../../services/api';
import toggleSetEditGoalModal from './toggleSetEditGoalModalActions';
import goalMotivationActions from './goalMotivationActions';
import goalTitleActions from './goalTitleActions';
import goalAddTaskActions from './goalAddTaskActions';
import { radioActionClearColor } from './radioAction';
import { deleteFrozenGoalTasksInEditAction } from './frozenGoalTasksInEditAction';
import ModalDeleteGoalActions from './ModalDeleteGoalActions';
import errorAction from './errorAction';

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
        dispatch(ModalDeleteGoalActions.toggleDeleteGoalModal());
      } else {
        dispatch(
          errorAction.addDeleteGoalErrorInStore(
            'Goal not deleted, some problem with server, please try again later',
          ),
        );
      }
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.log(error);
      dispatch(
        errorAction.addDeleteGoalErrorInStore(
          'Goal not deleted, some problem with server, please try again later',
        ),
      );
    });
};

export default {
  asyncDeleteGoal,
};
