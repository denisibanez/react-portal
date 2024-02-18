import axios from 'axios';

const axiosApiInstance = axios.create();

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('ACCESS_TOKEN')
      ? localStorage.getItem('ACCESS_TOKEN')
      : null;
    const loggedIn = token ? JSON.parse(token).accessToken : null;
    if (loggedIn) {
      config.headers.Authorization = `Bearer ${loggedIn}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// Response interceptor for API calls
axiosApiInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error, 'statusCode error');
    if (error.response.status === 403 || error.response.status === 401) {
      //SNACKBAR_DISPATCH

      localStorage.removeItem('ACCESS_TOKEN');
      window.location.replace('/login');
    }
    return Promise.reject(error);
  }
);

export default axiosApiInstance;
