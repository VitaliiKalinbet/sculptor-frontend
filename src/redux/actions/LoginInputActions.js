const inputData = ({ target }) => ({
  type: target.name,
  name: target.name,
  value: target.value,
});

const logedIn = uid => ({
  type: 'LOGEDIN',
  uid,
});
export default { inputData, logedIn };
