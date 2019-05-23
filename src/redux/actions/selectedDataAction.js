const selectedData = (event, arr) => ({
  type: 'DATASELECTION',
  value: event,
  arr,
});

export default selectedData;
