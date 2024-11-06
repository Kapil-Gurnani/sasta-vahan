import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box,
  Grid2,
  IconButton,
} from "@mui/material";
import { state } from "../../constants/constants";
import Pune from "./../../assets/images/cities/pune.png";
import Mumbai from "./../../assets/images/cities/mumbai.png";
import Sangli from "./../../assets/images/cities/sangli.png";
import Kolhapur from "./../../assets/images/cities/kolhapur.jpg";
import Nagpur from "./../../assets/images/cities/nagpur.jpg";
import Satara from "./../../assets/images/cities/satara.jpg";
import Pimpri from "./../../assets/images/cities/pimpri.webp";

const Location = ({
  selectedLocation,
  handleLocationChange,
  setModelState,
  onComplete,
}) => {
  const locations = [
    { city: "Pune", icon: Pune },
    { city: "Mumbai", icon: Mumbai },
    { city: "Kolhapur", icon: Kolhapur },
    { city: "Pimpri-Chinchwad", icon: Pimpri },
    { city: "Sangli", icon: Sangli },
    { city: "Nashik", icon: Sangli },
    { city: "Chhatrapati Sambhajinagar", icon: Sangli },
    { city: "Nagpur", icon: Nagpur },
    { city: "Navi Mumbai", icon: Mumbai },
    { city: "Satara", icon: Satara },
  ];

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
        style={{
          width: "100%",
          margin: "10px 0",
        }}
      >
        <InputLabel id="location-select-label">Location</InputLabel>
        <Select
          labelId="location-select-label"
          value={selectedLocation?.["location"]}
          onChange={onComplete}
          label="Location"
          name="location"
        >
          {locations.map((location) => (
            <MenuItem key={location?.city} value={location?.city}>
              {location?.city}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Grid2
        container
        spacing={2}
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "15px 0",
        }}
      >
        {locations.map((location, index) => (
          <Grid2
            key={index}
            xs={5} // Ensures three boxes per row
            style={{
              width: "130px", // Fixed width for each grid box
              height: "130px", // Fixed height for each grid box
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "2px",
            }}
          >
            <IconButton
              className="location-box"
              name="location"
              onClick={(e) =>
                onComplete({
                  target: {
                    name: "location",
                    value: e.target.innerText,
                  },
                })
              }
            >
              <img src={location?.icon} alt="icon" width="24" height="24" />
              {location?.city}
            </IconButton>
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
};

export default Location;
