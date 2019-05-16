function editGoal(
  state = { editing: false, modalType: '', data: {} },
  { type, modalType, data, id },
) {
  switch (type) {
    case 'EDIT_GOAL':
      return {
        editing: true,
        modalType,
        data: modalType === 'UPDATE' ? data : {},
      };
    case 'EDIT_GOAL_CANCEL':
      if (id === 'Backdrop') {
        return { editing: false, modalType: '', data: {} };
      }
      return { editing: true, modalType };
    case 'SAVE_GOAL':
      return { editing: false, modalType: '' };
    case 'ADD_GOAL':
      return { editing: false, modalType: '' };
    default:
      return state;
  }
}

export default editGoal;
