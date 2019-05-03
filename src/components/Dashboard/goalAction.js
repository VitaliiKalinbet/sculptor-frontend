/* eslint-disable */
import API from '../../services/api';

const fetchGoals = data => ({
  type: 'SET_GOALS',
  payload: data,
});

const asyncGoalAction = user => dispatch => {
  console.log('disp', dispatch);
  API.getGoals(user)
    .then(data => dispatch(fetchGoals(data)))
    .catch(error => console.log(error));
};

export default asyncGoalAction;
