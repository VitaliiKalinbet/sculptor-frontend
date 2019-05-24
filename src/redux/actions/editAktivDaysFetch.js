const aktivData = () => ({
  type: 'UPDATE_WEEK_DAYS',
});

const AsyncEditWeekDays = (taskId, data) => dispatch => {
  fetch(`https://sculptor.vbguard.dev/api/task/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'aplication/json',
      Authorization:
        'Bearer ' +
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNWNkYTZiOWZjMWIzYmEwNmE4ZGZkMzc1IiwiZW1haWwiOiJjbEBtYWlsLmNvbSIsImlhdCI6MTU1Nzg0NDIzMX0.m6PEWnAEE4tvjXNL0ZeUhogJ5Es-dGVIIrIox7pnLaE',
    },
    body: JSON.stringify({
      fieldsUpdate: {
        taskActiveDates: data,
      },
    }),
  })
    .then(res => res.json())
    .then(datas => console.log('datas', datas))
    .then(res => dispatch(aktivData(res)))
    .then(res => console.log('AKTIV_DAY', res))
    .catch(err => console.log(err));
};

export default AsyncEditWeekDays;
