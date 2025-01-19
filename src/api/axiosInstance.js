import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://ec2-13-49-238-236.eu-north-1.compute.amazonaws.com:3000/api/', // Base URL
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
      config.headers['Authorization'] = sessionStorage.getItem('token');
      // config.headers['apiKey'] = `$sasta_vahan_sale_amt_pro@2024`;
      // config.headers['clientId'] = `sasta_vahan_sale_amt_pro`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    sessionStorage.setItem('token', response.headers['Authorization']);
    return response;
  },
  (error) => {
    // Handle global response errors
    return Promise.reject(error);
  }
);

export default axiosInstance;
