import React, { useState } from "react";
import { AppBar, Tabs, Tab, Typography, Box, TextField } from "@mui/material";
import RegistrationYear from "../../RegistrationYear/RegistrationYear";
import Location from "../../Location/Location";
import { state } from "../../../constants/constants";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tab-panel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

const steps = ["Reg. year", "Location"];

const TabModel = ({ sellCarResponse, carInputs, handleInput, setModelState }) => {
  const [value, setValue] = useState(0);
  const [selectedValues, setSelectedValues] = useState(["", ""]);
  const [displayValues, setDisplayValues] = useState("");

  const handleChange = (event, newValue) => {
    // Allow switching if moving back
    if (newValue < value) {
      setValue(newValue);
    }
  };

  const handleInputChange = (index) => (event) => {
    const newValue = event.target.value;
    const newValues = [...selectedValues];
    newValues[index] = newValue;
    setSelectedValues(newValues);
    setDisplayValues(newValues.join(", ")); // Update the displayed concatenated values

    // Auto switch to next step if a value is selected
    if (newValue && index < selectedValues.length - 1) {
      setValue(index + 1); // Switch to the next step
    }
    handleInput(event);
    // if(index===1) {
    //     setModelState(state.OTP_MODEL)
    // }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h6" sx={{ margin: "16px 0" }}>
        {sellCarResponse?.vehicleNum}: {displayValues}
      </Typography>
      <AppBar position="static" sx={{ boxShadow: "none" }}>
        <Tabs value={value} onChange={handleChange}>
          {selectedValues.map((val, index) => {
            const isCompleted = val !== ""; // Step is completed if it has a value
            const isNextStep = index === value + 1 && selectedValues[index - 1]; // Next step if previous is completed
            return (
              <Tab
                key={index}
                label={`${steps[index]}`}
                sx={{
                  backgroundColor: isCompleted
                    ? "#98FF98" // Completed step
                    : isNextStep
                    ? "#FAEBD7" // Next step if previous is completed
                    : index === value && !val
                    ? "#FAEBD7"
                    : "default", // Ongoing step
                  color: "white", // Text color
                  borderRadius: "20px", // Rounded corners
                  margin: "0 4px", // Space between tabs
                  padding: "8px 16px", // Padding for better touch targets
                  transition: "background-color 0.3s, transform 0.3s", // Smooth transitions
                  "&:hover": {
                    backgroundColor: isCompleted
                      ? "#98FF98"
                      : isNextStep
                      ? "#FAEBD7"
                      : index === value
                      ? "#FAEBD7"
                      : "default",
                    transform: "scale(1.05)", // Scale up on hover for a 3D effect
                  },
                }}
              />
            );
          })}
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <RegistrationYear
          selectedYear={carInputs}
          handleYearChange={handleInputChange(0)}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Location
          selectedLocation={carInputs}
          handleLocationChange={handleInputChange(1)}
          setModelState={setModelState}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TextField
          label="Select Value for Step Three"
          variant="outlined"
          onChange={handleInputChange(2)}
          fullWidth
        />
      </TabPanel>
    </Box>
  );
};

export default TabModel;
