/*eslint-disable*/
function activeDateReducer(state = {}, action) {
  switch (action.type) {
    case 'editDatePicker':
      const newArrayActiveDates = action.newArrDates;
      const id = action.id;
      const findObj = action.ourObj.data.map(el =>
        el.goalTasks.map(el =>
          el._id === id ? { ...el, taskActiveDates: newArrayActiveDates } : el,
        ),
      );
      return findObj;

    default:
      return state;
  }
}
export default activeDateReducer;
