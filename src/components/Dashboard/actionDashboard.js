/* eslint-disable */

import axios from 'axios';

const fetchTasks = data => ({
  type: 'GET_TASKS',
  payload: data,
});

const asyncTasksAction = query => dispatch => {
  axios
    .get(query)
    .then(response => console.log(response))
    .then(data => dispatch(fetchTasks(data)))
    .catch(error => console.log(error));
};

export default asyncTasksAction;
