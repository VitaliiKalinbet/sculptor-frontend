const inputMotivation = e => ({
  type: 'INPUT_GOAL_MOTIVATION',
  value: e.target.value,
});

const inputMotivationClear = () => ({
  type: 'INPUT_MOTIVATION_CLEAR',
});

export default {
  inputMotivation,
  inputMotivationClear,
};
