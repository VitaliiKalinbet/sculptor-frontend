const initialWeekRange = [
  {
    week: 1,
    status: false,
  },
  {
    week: 2,
    status: false,
  },
  {
    week: 3,
    status: false,
  },
  {
    week: 4,
    status: false,
  },
  {
    week: 5,
    status: false,
  },
  {
    week: 6,
    status: false,
  },
  {
    week: 7,
    status: false,
  },
  {
    week: 8,
    status: false,
  },
  {
    week: 9,
    status: false,
  },
];

export default function weekRange(state = initialWeekRange, action) {
  const newWeekRange = [...initialWeekRange];
  switch (action.type) {
    case 'WEEKSELECTED':
      newWeekRange[action.target.name].status = action.target.checked;
      return newWeekRange;
    default:
      return state;
  }
}
