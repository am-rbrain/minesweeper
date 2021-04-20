import http from "axios";

const axios = http.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response.status === 401) {
      window.localStorage.removeItem("token");
      window.location.reload();
      return;
    }
    return Promise.reject(error);
  }
);

export default axios;
