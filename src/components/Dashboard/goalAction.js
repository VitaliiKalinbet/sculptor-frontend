/* eslint-disable */
import API from '../../services/api';

const fetchGoals = data => ({
  type: 'SET_GOALS',
  payload: data,
});

const asyncGoalAction = user => dispatch => {
  API.getGoals(user)
    .then(data => dispatch(fetchGoals(data.goals)))
    .catch(error => console.log(error));
};

export default asyncGoalAction;
