function editGoal(state = { editing: false, modalType: '' }, action) {
  switch (action.type) {
    case 'EDIT_GOAL':
      return { editing: true, modalType: action.modalType };
    case 'EDIT_GOAL_CANCEL':
      if (action.id === 'Backdrop') {
        return { editing: false, modalType: '' };
      }
      return { editing: true, modalType: action.modalType };
    case 'SAVE_GOAL':
      return { editing: false, modalType: '' };
    case 'ADD_GOAL':
      return { editing: false, modalType: '' };
    default:
      return state;
  }
}

export default editGoal;
