import axios from 'axios';

const axiosApiInstance = axios.create({
  baseURL: import.meta.env.VITE_WEATHER_API_BASE_URL,
});

// axiosApiInstance.interceptors.request.use(
//   async (config) => {

//     const token = localStorage.getItem('token');
//     // const keys = JSON.parse(value)
//     config.headers = {
//       ...config.headers,
//       Accept: 'application/json',
//       // 'ngrok-skip-browser-warning': true,
//     };
//     if (token) config.headers.Authorization = `Bearer ${token}`;
//     return config;
//   },
//   (error) => {
//     Promise.reject(error);
//   }
// );

// // Response interceptor for API calls
// axiosApiInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async function (error) {
//     const originalRequest = error.config;
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       window.location.replace('/login');
//       // sessionStorage.clear();
//       // localStorage.removeItem('user');
//       // localStorage.removeItem('token');
//       // localStorage.removeItem('_r');
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosApiInstance;
