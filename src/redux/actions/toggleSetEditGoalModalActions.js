/* eslint-disable eqeqeq */
/* eslint-disable no-underscore-dangle */
const closeSetEditGoalModal = e => ({
  type: 'EDIT_GOAL_CANCEL',
  id: e.target.dataset.id,
});

const openSetEditGoalModal = (e, data, modalType) => ({
  type: 'EDIT_GOAL',
  id: e.target.dataset.id,
  data,
  modalType,
});

export default {
  closeSetEditGoalModal,
  openSetEditGoalModal,
};
