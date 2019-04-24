/*eslint-disable*/
function calendarButton(state = SVGComponentTransferFunctionElement, action) {
  switch (action.type) {
    case 'CALENDAR':
      return !state;
    default:
      return state;
  }
}

export default calendarButton;
