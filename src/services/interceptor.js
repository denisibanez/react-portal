import axios from 'axios';
import { setSnackbar } from '@/store/reducers/snackbar/snackbar.store';
import store from '@/store/index';
const axiosApiInstance = axios.create();

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('ACCESS_TOKEN')
      ? localStorage.getItem('ACCESS_TOKEN')
      : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
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
      const control = {
        model: true,
        duration: 6000,
        message: e.message || 'Error!',
        severity: 'error',
      };
      store.dispatch(setSnackbar(control));
      localStorage.removeItem('ACCESS_TOKEN');
      window.location.replace('/login');
    }
    return Promise.reject(error);
  }
);

export default axiosApiInstance;
