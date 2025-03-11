import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'https://backend-sv.sastavahan.in/api/', // Base URL
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
    const token = sessionStorage.getItem('token');
    if (token) {
      config.headers['authorization'] = ` Bearer ${token}`;
      // config.headers['apiKey'] = `$sasta_vahan_sale_amt_pro@2024`;
      // config.headers['clientId'] = `sasta_vahan_sale_amt_pro`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.headers['authorization']) sessionStorage.setItem('token', response.headers['authorization']);
    return response;
  },
  (error) => {
    // Handle global response errors
    return Promise.reject(error);
  }
);

export default axiosInstance;
