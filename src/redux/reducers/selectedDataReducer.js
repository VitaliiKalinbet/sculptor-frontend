/*eslint-disable*/
function selectedData(state = new Date(), action) {
  switch (action.type) {
    case 'DATA':
      return (state = action.value);
    default:
      return state;
  }
}

export default selectedData;
