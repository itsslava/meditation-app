import axios from 'axios';

export const API_ROUTES = {
  meditations: 'meditations',
  profile: 'profile',
  auth: {
    login: '/auth/login',
    register: '/auth/register',
  },
};

export const http = axios.create({ baseURL: 'http://localhost:3000/api/', timeout: 10000 });
