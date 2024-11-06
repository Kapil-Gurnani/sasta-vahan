import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getPrice } from "../../../helpers/getPrice";

const OTPModel = ({ setOTPVerified, onComplete, state }) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleMobileChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const sendOtp = () => {
    if (mobileNumber.length === 10) {
      // Mock sending OTP logic (you can integrate API here)
      console.log("OTP sent to", mobileNumber);
      const url = "http://dtasit.com/api/pushsms"; // Replace with your API endpoint
      // Create the parameters object
      const params = {
        user: 503332,
        authkey: "92IsVjdE1uYg",
        sender: "SSTVHN",
        mobile: 8299173856,
        text: "Hello",
        entityid: 1201161587562398931,
        templateid: 1707172326843913423,
        rpt: 1,
      };
      axios
        .get(url, { params })
        .then((response) => {
          console.log("Data retrieved successfully:", response.data);
        })
        .catch((error) => {
          console.error("Error retrieving data:", error);
        });
      setOtpSent(true);
    } else {
      alert("Please enter a valid 10-digit mobile number.");
    }
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const verifyOtp = () => {
    // Mock OTP verification logic
    if (otp.length === 6) {
      console.log("OTP Verified", otp);
      alert("OTP Verified!");
      // setOTPVerified(true);
      onComplete();
      navigate("/evaluation", {
        state: {
          ...state,
          fairPrice: getPrice(state?.fairPrice),
          bestPrice: getPrice(state?.bestPrice),
        },
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
        color: 'black'
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
              style: { color: '#f27679' }, // Change to your desired color
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
              style: { color: '#f27679' }, // Change to your desired color
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
