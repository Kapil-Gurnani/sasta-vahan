import axiosInstance from '../axiosInstance';

// Define API calls related to user management
const carService = {
  getCarPrice: (params) => axiosInstance.get('/resale-amount/search',{params}),
};

export default carService;
