import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import RegistrationYear from "../components/RegistrationYear/RegistrationYear";
import Location from "../components/Location/Location";
import OTPModel from "../components/SellCarModel/OTPModel/OTPModel";
import { useLocation } from "react-router-dom";
import Variant from "../components/Variant/Variant";
import { getPrice } from "../helpers/getPrice";
import background from "./../assets/images/evaluation_bg.webp";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SerialNo from "../components/SerialNo/SerialNo";

function Dashboard() {
  const [activeStep, setActiveStep] = useState(0);
  const location = useLocation();
  const { state } = location;
  const [carDetails, setCardetails] = useState({
    name: state?.vehicleNum,
  });

  // Steps for the Stepper component
  const steps = [
    "Location",
    "Registration year",
    "Variant",
    "Serial No.",
    "Mobile Verification",
  ];

  // Function to handle step completion
  const handleNext = (e) => {
    console.log(e);
    setCardetails((prevValue) => {
      return {
        ...prevValue,
        [e.target.name]: e.target.value,
      };
    });
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  // Function to handle going back to the previous step
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // Function to reset the stepper to the first step
  const handleReset = () => {
    setActiveStep(0);
  };

  // Rendering step content based on the current step
  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <Location onComplete={handleNext} />;
      case 1:
        return <RegistrationYear onComplete={handleNext} />;
      case 2:
        return <Variant onComplete={handleNext} />;
      case 3:
        return <SerialNo onComplete={handleNext} />;
      case 4:
        return (
          <OTPModel
            onComplete={handleNext}
            state={{
              ...state,
              ...carDetails,
            }}
          />
        );
      default:
        return "Unknown step";
    }
  }

  function getCarDetails() {
    const output = Object.keys(carDetails)?.map((carDetail) => {
      return carDetails[carDetail];
    });
    return output.join("-");
  }

  return (
    <Box
      sx={{ width: "100%" }}
      style={{
        backgroundImage: `url(${background})`, // Replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "calc(100vh - 116px)",
        height: "100%", // Adjust height as necessary
        width: "100%",
        color: "white",
        display: "flex",
        flexDirection: "column",
        paddingTop: "20px",
        // justifyContent: "space-between",
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Your Car Details
      </Typography>
      {getCarDetails()}

      {/* Stepper Component */}
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label} completed={index < activeStep}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* Step content */}
      <Box sx={{ mt: 3 }}>
        {activeStep === steps.length ? (
          <div>
            <Typography variant="h5">
              All steps completed - you&apos;re finished!
            </Typography>
            <Button onClick={handleReset} sx={{ mt: 2 }}>
              Reset
            </Button>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {activeStep != 0 && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: 2,
                  alignItems: "baseline",
                }}
              >
                <IconButton size="large" onClick={handleBack} color="inherit">
                  <ArrowBackIcon />
                </IconButton>
              </Box>
            )}
            {getStepContent(activeStep)}
          </div>
        )}
      </Box>
    </Box>
  );
}

export default Dashboard;
