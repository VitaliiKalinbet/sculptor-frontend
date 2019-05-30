const inputGoalTitle = e => ({
  type: 'INPUT_GOAL_TITLE',
  value: e.target.value,
});

const inputGoalTitleClear = () => ({
  type: 'INPUT_GOAL_TITLE_CLEAR',
});

export default {
  inputGoalTitle,
  inputGoalTitleClear,
};
