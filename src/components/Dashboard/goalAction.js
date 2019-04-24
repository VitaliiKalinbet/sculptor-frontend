/* eslint-disable */

const fetchGoals = data => ({
  type: 'GET_GOALS',
  payload: data,
});

const asyncGoalAction = () => dispatch => {
  fetch('http://192.168.90.200:8000/api/goal/5cb9963d06b961a1025d6000', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer ' +
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNWNiOTk2M2QwNmI5NjFhMTAyNWQ2MDAwIiwiZW1haWwiOiJnb29nbGVAZ28uY29tIiwiaWF0IjoxNTU2MDg2NjgzfQ.bzMkR4T8--Ri_mn9XWtsvRnG14OtDu77nwjsH91D8ZA',
    },
  })
    .then(response => response.json())
    .then(data => dispatch(fetchGoals(data)))
    .catch(error => console.log(error));
};

export default asyncGoalAction;
