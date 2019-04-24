const logedIn = uid => ({
  type: 'LOGEDIN',
  uid,
});

const addUser = data => ({
  type: 'ADD_USER',
  data,
});

export default { logedIn, addUser };
