import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.escuelajs.co/',
});


const axiosInstanceProduct = axios.create({
  baseURL: 'https://8c155025-93d6-4ead-a36d-9afdf9c1f291.mock.pstmn.io/recommend/items',
});


axiosInstance.interceptors.request.use(request => {

  return request;
}, error => {

  return Promise.reject(error);
});
axiosInstanceProduct.interceptors.request.use(request => {

  return request;
}, error => {

  return Promise.reject(error);
});

axiosInstance.interceptors.response.use(response => {

  return response;
}, error => {

  if (error.response) {
    switch (error.response.status) {
      case 401:

        break;
      case 403:

        break;
      case 500:

        break;

      default:

        break;
    }
  }
  return Promise.reject(error);
});
axiosInstanceProduct.interceptors.response.use(response => {

  return response;
}, error => {

  if (error.response) {
    switch (error.response.status) {
      case 401:

        break;
      case 403:

        break;
      case 500:

        break;

      default:

        break;
    }
  }
  return Promise.reject(error);
});

export  {axiosInstance, axiosInstanceProduct};
