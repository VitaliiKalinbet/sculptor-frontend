/* eslint-disable */

const fetchGoals = data => ({
  type: 'GET_GOALS',
  payload: data,
});

const asyncGoalAction = () => dispatch => {
  fetch('http://192.168.90.102:8000/api/goal/5cbf2575af7aaf324c99c1c4', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer ' +
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNWNiZjI1NzVhZjdhYWYzMjRjOTljMWM0IiwiZW1haWwiOiJwYXBleWVAc2FpbG9yLm1hbiIsImlhdCI6MTU1NjAzMDg4N30.2DcWr_N5inejEhXFaVmNde8k4ZbuyezclDzzhjjH0Kk',
    },
  })
    .then(response => response.json())
    .then(data => dispatch(fetchGoals(data)))
    .catch(error => console.log(error));
};

export default asyncGoalAction;
