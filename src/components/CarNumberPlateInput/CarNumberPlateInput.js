import React, { useCallback, useState } from "react";
import {
  TextField,
  InputAdornment,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar"; // Use the car icon from Material-UI
import debounce from "lodash/debounce";
import "./styles.css";

const CarNumberPlateInput = ({ handleInput }) => {
  const [error, setError] = useState(false);
  // Regex pattern for car number (this can vary based on your specific format)
  const carNumberPattern = /^[A-Z]{2}[0-9]{1,2}[A-Z]{1,3}[0-9]{4}$/;
  const kms = [
    { value: 10000, range: "0-10000" },
    { value: 20000, range: "10001-20000" },
    { value: 30000, range: "20001-30000" },
    { value: 40000, range: "30001-40000" },
    { value: 50000, range: "40001-50000" },
    { value: 60000, range: "50001-60000" },
    { value: 70000, range: "60001-70000" },
    { value: 80000, range: "70001-80000" },
    { value: 90000, range: "80001-90000" },
    { value: 100000, range: "90001-100000" },
    { value: 100001, range: "Above 100000" },
  ];
  const debouncedInput = useCallback(
    debounce((e) => {
      if (e.target.name === "vehicle_num") {
        if (
          carNumberPattern.test(e.target.value.toUpperCase()) &&
          e.target.value.length === 10
        ) {
          setError(false);
        } else {
          setError(true);
        }
      }
      handleInput(e);
    }, 1000),
    []
  );
  return (
    <Box display={"flex"} width={"100%"} alignItems={"center"}>
      <TextField
        label="Car Number Plate"
        variant="outlined"
        className="car-number-plate"
        onChange={debouncedInput}
        name={"vehicle_num"}
        error={error}
        helperText={error ? "Invalid car number format" : ""}
        InputProps={{
          maxLength: 10, // Adjust max length according to car number format
          startAdornment: (
            <InputAdornment position="start">
              <DirectionsCarIcon />
            </InputAdornment>
          ),
        }}
      />
      <FormControl fullWidth variant="outlined">
        <InputLabel id="kms-select-label">KMs</InputLabel>
        <Select
          labelId="kms-select-label"
          //   value={selectedYear?.["registration-year"]}
          onChange={debouncedInput}
          label="km"
          name="km"
        >
          {kms.map((km) => (
            <MenuItem key={km.value} value={km.value}>
              {km.range}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CarNumberPlateInput;
