import axiosInstance from '../axiosInstance';

// Define API calls related to user management
const carService = {
  getCarPrice: (payload) => axiosInstance.post('/car-evaluation',payload),
  otpGenerate: (payload) => axiosInstance.post('/otp-generate',payload),
  otpVerify: (payload) => axiosInstance.post('/otp-verify',payload),
  bookingAppointment: (payload) => axiosInstance.post('/booking-appointment',payload),
};

export default carService;
