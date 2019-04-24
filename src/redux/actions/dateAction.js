/*eslint-disable*/
export const dateAction = event => ({
  type: 'DATE',
  dateObj: event.target.dataset.date,
});
