/*eslint-disable*/
export const showSidebar = (e, newArrDates, ourObj) => ({
  type: 'editDatePicker',
  newArrDates,
  ourObj,
  id: e.target.dataset.id,
});
