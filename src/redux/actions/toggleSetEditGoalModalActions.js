/* eslint-disable eqeqeq */
/* eslint-disable no-underscore-dangle */
const closeSetEditGoalModal = e => ({
  type: 'EDIT_GOAL_CANCEL',
  id: e.target.dataset.id,
});

const openSetEditGoalModal = (e, goals, modalType) => ({
  type: 'EDIT_GOAL',
  id: e.target.dataset.id,
  goals,
  modalType,
});

export default {
  closeSetEditGoalModal,
  openSetEditGoalModal,
};
