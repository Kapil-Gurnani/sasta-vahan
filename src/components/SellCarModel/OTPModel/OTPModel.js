import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { getPrice } from "../../../helpers/getPrice";
import carService from "../../../api/services/carService";
import useApiRequest from "../../../api/useApiRequest"; // Import the custom hook

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config) => {
  return config;
});

const OTPModel = ({ setOTPVerified, onComplete, state }) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [originalOTP, setOriginalOTP] = useState(0);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const { apiRequest, loading } = useApiRequest(); // Use the hook

  const handleMobileChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const sendOtp = async () => {
    if (mobileNumber.length === 10) {
      // Mock sending OTP logic (you can integrate API here)
      const response = await apiRequest(carService.otpGenerate,{mobile:parseInt(mobileNumber)})
      if(response) setOtpSent(true);
    } else {
      alert("Please enter a valid 10-digit mobile number.");
    }
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const verifyOtp = async () => {
    // Mock OTP verification logic
    if (otp.length === 6) {
        const response = await apiRequest(carService.otpVerify,{
          mobile: parseInt(mobileNumber),
          otp: parseInt(otp),
        });
      if(response) onComplete({target:{name: "mobile", value: mobileNumber}});
    } else {
      alert("Please enter a valid 6-digit OTP.");
    }
  };

  return (
    <> {!otpSent ? (
      
      <Typography variant="h5" gutterBottom color={'white'}>
      Enter your mobile number to get an instant offer.
    </Typography>
    ) : (
      <Typography variant="h5" gutterBottom color={'white'}>
            Enter your OTP
          </Typography>
    )}
    {/* <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
        // height: "calc(100vh - 160px)",
        gap: 2,
        width: "80%",
        justifySelf: "center",
        backgroundColor: "white",
        padding: "30px",
        // margin: '10px',
        borderRadius: "20px",
        color: "black",
      }}
    > */}
      {!otpSent ? (
        <>
          <TextField
            // label="Mobile Number"
            variant="outlined"
            value={mobileNumber}
            // InputLabelProps={{
            //   style: { color: "#f27679" }, // Change to your desired color
            // }}
            onChange={handleMobileChange}
            placeholder="Enter mobile number"
            fullWidth
            sx={{ maxWidth: "300px", borderRadius: '5px',background: 'white',margin: '10px' }}
          />
          <Button
            variant="contained"
            className={`submit ${
              mobileNumber.length !== 10 && "disabled-button"
            }`}
            disabled={mobileNumber.length !== 10}
            onClick={sendOtp}
          >
            Get Instant Offer
          </Button>
        </>
      ) : (
        <>
          {/* <Typography variant="h5" gutterBottom>
            Enter OTP
          </Typography> */}
          <TextField
            // label="OTP"
            variant="outlined"
            value={otp}
            // InputLabelProps={{
            //   style: { color: "#f27679" }, // Change to your desired color
            // }}
            onChange={handleOtpChange}
            placeholder="Enter OTP"
            fullWidth
            sx={{ maxWidth: "300px", borderRadius: '5px',background: 'white',margin: '10px' }}
          />
          <Button
            variant="contained"
            className={`submit ${otp.length !== 6 && "disabled-button"}`}
            disabled={otp.length !== 6}
            onClick={verifyOtp}
          >
            Verify OTP
          </Button>
        </>
      )}
      <Typography color={'white'} sx={{opacity:0.8, marginTop: '30px', fontSize: '14px'}}>Trusted by thousands of car sellers nationwide</Typography>
    {/* </Box> */}
    </>
  );
};

export default OTPModel;
