/* eslint-disable */

const getTasks = data => ({
  type: 'ONLY_TASKS',
  payload: data,
});

const asyncTasksAction = () => dispatch => {
  fetch('http://192.168.90.200:8000/api/goal/5cb9963d06b961a1025d6000', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer ' +
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNWNiOTk2M2QwNmI5NjFhMTAyNWQ2MDAwIiwiZW1haWwiOiJnb29nbGVAZ28uY29tIiwiaWF0IjoxNTU1OTUxMDI4fQ.9JPy3ofpXNwNJ3mczwcOHAcL1fY5aVr4EEizoaBeABs',
    },
  })
    .then(response => response.json())
    .then(data => dispatch(getTasks(data)))
    .catch(error => console.log(error));
};

export default asyncTasksAction;
