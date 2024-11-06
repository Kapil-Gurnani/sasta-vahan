import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'https://api.cuvora.com/car/partner/v3/advanced', // Base URL
  timeout: 10000, // Optional timeout
  headers: {
    'Content-Type': 'application/json',
    // Add any default headers
  },
});

// Optionally, you can set up interceptors to handle authentication tokens or logging
axiosInstance.interceptors.request.use(
  (config) => {
    // Do something before sending the request
    // const token = localStorage.getItem('token'); // Example for adding auth token
    // if (token) {
      config.headers['Authorization'] = `Bearer 17790d39127c4e769e1f0679942616==`;
      config.headers['apiKey'] = `$sasta_vahan_sale_amt_pro@2024`;
      config.headers['clientId'] = `sasta_vahan_sale_amt_pro`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle global response errors
    return Promise.reject(error);
  }
);

export default axiosInstance;
