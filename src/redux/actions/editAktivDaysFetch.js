const aktivData = () => ({
  type: 'UPDATE_WEEK_DAYS',
});

const AsyncEditWeekDays = (taskId, data) => dispatch => {
  fetch(`http://192.168.90.200:8000//api/task/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'aplication/json',
      Authorization:
        'Bearer ' +
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNWNiOTk2M2QwNmI5NjFhMTAyNWQ2MDAwIiwiZW1haWwiOiJnb29nbGVAZ28uY29tIiwiaWF0IjoxNTU2MDg2NjgzfQ.bzMkR4T8--Ri_mn9XWtsvRnG14OtDu77nwjsH91D8ZA',
    },
    body: JSON.stringify({
      data,
    }),
  })
    .then(res => res.json())
    .then(res => dispatch(aktivData(res)))
    .then(res => console.log('AKTIV_DAY', res))
    .catch(err => console.log(err));
};

export default AsyncEditWeekDays;
