import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid2,
} from "@mui/material";

const RegistrationYear = ({ selectedYear, handleYearChange, onComplete }) => {
  // Create an array of years from 2012 to 2024
  const years = Array.from({ length: 15 }, (v, k) => k + 2010);

  return (
    <div
      style={{
        width: "50%",
        backgroundColor: "white",
        padding: "10px",
        borderRadius: "20px",
      }}
    >
      <FormControl
        variant="outlined"
        style={{ width: "100%", margin: "10px 0" }}
      >
        <InputLabel id="year-select-label">Registration Year</InputLabel>
        <Select
          labelId="year-select-label"
          value={selectedYear?.["registration-year"]}
          onChange={onComplete}
          label="Registration Year"
          name="registration-year"
        >
          {Array.from({ length: 20 }, (v, k) => k + 2005).map((year) => (
            <MenuItem key={year} value={year}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Grid2
        container
        spacing={2}
        style={{
          display: "flex",
          justifyContent: "center",
          color: "black",
          margin: "15px 0",
        }}
      >
        {years.map((year, index) => (
          <Grid2
            key={index}
            xs={5}
            item
            style={{
              width: "130px", // Fixed width for each grid box
              height: "90px", // Fixed height for each grid box
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "2px",
            }}
            // className="registration-box"
            name="registration-year"
            onClick={(e) =>
              onComplete({
                target: {
                  name: "registration-year",
                  value: e.target.innerText,
                },
              })
            }
          >
            <div
              className="location-box registration-box"
              style={{
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              {year}
            </div>
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
};

export default RegistrationYear;
