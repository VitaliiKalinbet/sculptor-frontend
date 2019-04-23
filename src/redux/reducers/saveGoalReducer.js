function goals(state = [], action) {
  console.log(action);
  switch (action.type) {
    case 'SAVE_GOAL':
      console.log(action);
      return [...action.goals, action.updatedGoal];
    default:
      console.log(action);

      return state;
  }
}

export default goals;
