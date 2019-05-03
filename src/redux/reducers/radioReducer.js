export default function goalColor(state = '', action) {
  console.log('ss');
  switch (action.type) {
    // eslint-disable-next-line no-case-declarations
    case 'COLORSELECTED':
      const selectedColor = action.target.value;
      return selectedColor;
    default:
      return state;
  }
}
