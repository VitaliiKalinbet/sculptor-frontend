/* eslint-disable */

import { updateAllGoalInfoHelper } from '../../utils/updateAllGoalInfo';

import goalMotivationActions from '../../redux/actions/goalMotivationActions';
import goalTitleActions from '../../redux/actions/goalTitleActions';
import goalAddTaskActions from '../../redux/actions/goalAddTaskActions';
import { radioActionClearColor } from '../../redux/actions/radioAction';
import { deleteFrozenGoalTasksInEditAction } from '../../redux/actions/frozenGoalTasksInEditAction';
import toggleSetEditGoalModal from '../../redux/actions/toggleSetEditGoalModalActions';
import errorAction from './errorAction';

const saveGoal = (
  goalTitle,
  goalColor,
  goalTasks,
  goalMotivation,
  goals,
  activeGoalID,
) => dispatch => {
  dispatch({
    type: 'SAVE_GOAL',
    updatedGoal: {
      goalTitle,
      goalColor,
      goalTasks,
      goalMotivation,
      activeGoalID,
    },
    goals,
  });
};

const addGoal = (
  goalTitle,
  goalColor,
  goalTasks,
  goalMotivation,
  goals,
  activeGoalID,
) => ({
  type: 'ADD_GOAL',
  updatedGoal: {
    goalTitle,
    goalColor,
    goalTasks,
    goalMotivation,
    activeGoalID,
  },
});

const saveEditGoal = arrGoals => ({
  type: 'SAVE_EDIT_GOAL',
  arrGoals,
});

const asyncSaveEditGoal = (
  editGoal,
  goalData,
  frozenGoalTasksInEdit,
) => dispatch => {
  updateAllGoalInfoHelper(editGoal, goalData, frozenGoalTasksInEdit)
    .then(data => {
      if (data.data.goals.length > 1) {
        dispatch(goalMotivationActions.inputMotivationClear());
        dispatch(goalTitleActions.inputGoalTitleClear());
        dispatch(goalAddTaskActions.inputTaskTitleClear());
        dispatch(radioActionClearColor());
        dispatch(deleteFrozenGoalTasksInEditAction());
        dispatch(toggleSetEditGoalModal.closeEditGoalModal());
        dispatch(errorAction.deleteErrorFromStore());
        dispatch(saveEditGoal(data.data.goals));
      } else {
        dispatch(
          errorAction.addErrorInStore(
            'Data not saved, some problem with server, please try again later',
          ),
        );
      }
    })
    .catch(error => {
      console.log(error);
      errorAction.addErrorInStore(
        'Data not saved, some problem with server, please try again later',
      );
    });
};

export default {
  saveGoal,
  addGoal,
  asyncSaveEditGoal,
};
