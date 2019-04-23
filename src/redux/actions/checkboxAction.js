// eslint-disable-next-line import/prefer-default-export
export const checkboxAction = e => ({
  type: 'WEEK_SELECTED',
  id: e.target.value,
  name: e.target.name,
  checked: e.target.checked,
});
