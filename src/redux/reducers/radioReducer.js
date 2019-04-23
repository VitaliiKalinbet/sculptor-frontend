export default function goalColor(state = '', action) {
  switch (action.type) {
    // eslint-disable-next-line no-case-declarations
    case 'COLORSELECTED':
      const selectedColor = action.target.value;
      return selectedColor;
    default:
      return state;
  }
}
