import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://sculptor.goit.co.ua/api',
});

const register = ({ email, password, name }) =>
  axiosInstance
    .post('/register', {
      email,
      password,
      name,
    })
    .then(res => res.data)
    .catch(err => err);

const login = ({ username, password }) =>
  axiosInstance
    .post('/login', {
      username,
      password,
    })
    .then(res => ({
      userId: res.data.userId,
      token: res.data.token,
    }))
    .catch(err => err);

const getGoals = ({ userId, token }) =>
  axiosInstance
    .get(`/goal/${userId}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    .then(res => res.data);

export default {
  register,
  login,
  getGoals,
};
