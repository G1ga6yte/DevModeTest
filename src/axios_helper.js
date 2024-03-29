import axios from 'axios';


export const getAuthToken = () => {
  return window.localStorage.getItem('auth_token');
};

export const setAuthHeader = (token) => {
  window.localStorage.setItem('auth_token', token);
};

axios.defaults.baseURL = 'http://localhost:8086';
// axios.defaults.baseURL = 'http://94.198.221.250:8086';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const request = (method, url, data) => {
  
  let headers = {};
  if (getAuthToken() !== null && getAuthToken() !== "null") {
    headers = { 'Content-Type': 'application/json'};
  }
  
  return axios({
    method: method,
    url: url,
    headers: headers,
    data: data});
};