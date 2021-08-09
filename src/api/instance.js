import axios from 'axios';

const axiosConfig = {
  baseURL: '/',
  headers: {
    'Content-Type': 'application/json',
  },
};

const themoviedbInstance = axios.create(axiosConfig);

const instance = {
  req(options) {
    return themoviedbInstance(options).then((res) => res.data);
  },
};

export default instance;
