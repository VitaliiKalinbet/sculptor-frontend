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

export default {
  saveGoal,
  addGoal,
};
