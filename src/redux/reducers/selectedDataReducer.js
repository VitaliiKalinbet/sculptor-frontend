/*eslint-disable*/
const diffDate = (firstDate, secondDate) => {};

function selectedData(state = [], action) {
  switch (action.type) {
    case 'DATA_SELECTION':
      console.log('action: ', action);
      console.log(action.arr);
      // console.log(action.value.getDate());
      // console.log(typeof action.value.getDate());

      if (action.arr.includes(String(action.value))) {
        console.log('if: ', action.value);
        const filtered = action.arr.filter(el => el !== String(action.value));
        return (state = filtered);
      }

      console.log('not have: ', action.value);
      return [...state, String(action.value)];
    case 'TASK_DATES':
      return [...state, ...action.payload];
    default:
      return state;
  }
}

export default selectedData;
