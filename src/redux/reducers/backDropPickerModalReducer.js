function showBackDropPicker(state = false, action) {
  switch (action.type) {
    case 'SHOW_PICKER_MODAL':
      return !state;
    default:
      return state;
  }
}

export default showBackDropPicker;
