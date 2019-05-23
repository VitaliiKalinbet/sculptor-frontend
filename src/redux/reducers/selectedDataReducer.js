/*eslint-disable*/
function selectedData(state = [], action) {
  switch (action.type) {
    case 'DATASELECTION':
      console.log('action: ', action);
      // console.log(action.arr[0].getDate());
      console.log(action.value.getDate());
      console.log(typeof action.value.getDate());

      if (action.arr.includes(String(action.value))) {
        console.log('if: ', action.value);
        const filtered = action.arr.filter(el => el !== String(action.value));
        return (state = filtered);
      } else {
        console.log('not have: ', action.value);
        return [...state, String(action.value)];
      }
    default:
      return state;
  }
}

export default selectedData;
