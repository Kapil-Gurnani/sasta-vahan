import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { getPrice } from "../../../helpers/getPrice";
import carService from "../../../api/services/carService";

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

  const handleMobileChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const sendOtp = () => {
    if (mobileNumber.length === 10) {
      // Mock sending OTP logic (you can integrate API here)
      carService.otpGenerate({mobile:parseInt(mobileNumber)})

      // const randomSixDigitNumber = Math.floor(100000 + Math.random() * 900000);
      // console.log("OTP - ", randomSixDigitNumber);
      // const url = "https://dtasit.ai/backend/api/http/sms/send"; // Replace with your API endpoint
      // // Create the parameters object
      // const params = {
      //   // user: 503332,
      //   api_token: "34|2KowVgRVWNaGsGABrV5XKJmBO7qxjolBEqtaEDwn8ed382b2",
      //   sender_id: "SSTVHN",
      //   recipient: mobileNumber,
      //   message: `${`Dear Customer, ${randomSixDigitNumber} is the One Time Password (OTP) for mobile verification. please do not share your OTP with anyone.Team Sasta Vahan`}`,
      //   entity_id: "1201161587562398931",
      //   dlt_template_id: "1707172326843913423",
      //   // rpt: 1,
      //   type: "plain",
      // };
      // axiosInstance
      //   .get(url, {
      //     params,
      //     paramsSerializer: (params) => qs.stringify(params, { encode: false }),
      //   })
      //   .then((response) => {
      //     console.log("Data retrieved successfully:", response.data);
      //     setOriginalOTP(randomSixDigitNumber);
      //   })
      //   .catch((error) => {
      //     console.error("Error retrieving data:", error);
      //   });
      setOtpSent(true);
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
      onComplete({target:{name: "mobile", value: mobileNumber}});
      await carService.otpVerify({
        mobile: parseInt(mobileNumber),
        otp: parseInt(otp),
      });
    } else {
      alert("Please enter a valid 6-digit OTP.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
        // height: "calc(100vh - 160px)",
        gap: 2,
        width: "50%",
        justifySelf: "center",
        backgroundColor: "white",
        padding: "30px",
        // margin: '10px',
        borderRadius: "20px",
        color: "black",
      }}
    >
      {!otpSent ? (
        <>
          <Typography variant="h5" gutterBottom>
            Enter your mobile number to see your car valuation
          </Typography>
          <TextField
            label="Mobile Number"
            variant="outlined"
            value={mobileNumber}
            InputLabelProps={{
              style: { color: "#f27679" }, // Change to your desired color
            }}
            onChange={handleMobileChange}
            placeholder="Enter mobile number"
            fullWidth
            sx={{ maxWidth: "300px" }}
          />
          <Button
            variant="contained"
            className={`submit ${
              mobileNumber.length !== 10 && "disabled-button"
            }`}
            disabled={mobileNumber.length !== 10}
            onClick={sendOtp}
          >
            Send OTP
          </Button>
        </>
      ) : (
        <>
          <Typography variant="h5" gutterBottom>
            Enter OTP
          </Typography>
          <TextField
            label="OTP"
            variant="outlined"
            value={otp}
            InputLabelProps={{
              style: { color: "#f27679" }, // Change to your desired color
            }}
            onChange={handleOtpChange}
            placeholder="Enter OTP"
            fullWidth
            sx={{ maxWidth: "300px" }}
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
    </Box>
  );
};

export default OTPModel;
