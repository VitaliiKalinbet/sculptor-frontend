function goals(state = [], action) {
  switch (action.type) {
    case 'SAVE_GOAL':
      return [...action.goals, action.updatedGoal];
    default:
      return state;
  }
}

export default goals;
