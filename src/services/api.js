import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://sculptor.vbguard.dev/api',
});

const register = ({ email, password, name }) =>
  axiosInstance
    .post('/register', { email, password, name })
    .then(res => res.data)
    .catch(err => err);

const login = ({ username, password }) =>
  axiosInstance
    .post('/login', { username, password })
    .then(res => res.data)
    .catch(err => err);

export default {
  register,
  login,
};
