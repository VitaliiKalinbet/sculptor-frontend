/* eslint-disable */
import API from '../../services/api';

const getTasks = data => ({
  type: 'ONLY_TASKS',
  payload: data,
});

const asyncTasksAction = user => dispatch => {
  API.getGoals(user)
    .then(data => dispatch(getTasks(data)))
    .catch(error => console.log(error));
};

export default asyncTasksAction;
