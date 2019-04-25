import axios from 'axios';

axios.defaults.baseUrl = 'https://sculptor.vbguard.dev/api';
// axios.defaults.headers.common['Authorization'] = '';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const register = ({ email, password, name }) =>
  axios
    .post('/register', { email, password, name })
    .then(res => {
      // console.log(res);
      return res;
    })
    .catch(err => {
      // console.log(err);
      return err;
    });

const login = ({ username, password }) =>
  axios
    .post('https://sculptor.vbguard.dev/api/login', { username, password })
    .then(res => {
      // console.log(res);
      return res;
    })
    .catch(err => {
      // console.log(err);
      return err;
    });

export default {
  register,
  login,
};
