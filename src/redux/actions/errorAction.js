const addErrorInStore = error => ({
  type: 'ADD_ERROR_IN_STORE',
  error,
});

const deleteErrorFromStore = () => ({
  type: 'DELETE_ERROR_FROM_STORE',
});

export default {
  addErrorInStore,
  deleteErrorFromStore,
};
