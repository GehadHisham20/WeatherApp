import axios from 'axios';

const axiosApiInstance = axios.create({
  baseURL: import.meta.env.VITE_WEATHER_API_BASE_URL,
});

export default axiosApiInstance;
