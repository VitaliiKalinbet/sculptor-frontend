/* eslint-disable */
import api from '../../services/api';

const getTasks = data => ({
  type: 'ONLY_TASKS',
  payload: data,
});

const asyncTasksAction = ({ userId, token }) => dispatch => {
  api
    .getGoals({
      userId,
      token,
    })
    .then(data => {
      dispatch(getTasks(data));
    })
    .catch(error => console.log(error));
};

export default asyncTasksAction;
