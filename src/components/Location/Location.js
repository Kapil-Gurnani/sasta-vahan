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
    { city: "Ahmednagar" },
    { city: "Akola" },
    { city: "Amravati" },
    { city: "Aurangabad" },
    { city: "Beed" },
    { city: "Bhandara" },
    { city: "Bhivandi" },
    { city: "Buldhana" },
    { city: "Chandrapur" },
    { city: "Chhatrapati Shahuji Maharaj Nagar (Kolhapur)" },
    { city: "Dhule" },
    { city: "Gondia" },
    { city: "Hingoli" },
    { city: "Jalgaon" },
    { city: "Jalna" },
    { city: "Kolhapur", icon: Kolhapur },
    { city: "Latur" },
    { city: "Mumbai", icon: Mumbai },
    { city: "Mumbai Suburban" },
    { city: "Nagpur", icon: Nagpur },
    { city: "Nanded" },
    { city: "Nandurbar" },
    { city: "Nashik", icon: Sangli }, // Using Sangli as the icon, as mentioned.
    { city: "Osmanabad" },
    { city: "Palghar" },
    { city: "Parbhani" },
    { city: "Pune", icon: Pune },
    { city: "Raigad" },
    { city: "Ratnagiri" },
    { city: "Sangli", icon: Sangli },
    { city: "Satara", icon: Satara },
    { city: "Sindhudurg" },
    { city: "Solapur" },
    { city: "Thane" },
    { city: "Wardha" },
    { city: "Washim" },
    { city: "Yavatmal" },
    { city: "Pimpri-Chinchwad", icon: Pimpri },
    { city: "Chhatrapati Sambhajinagar", icon: Sangli },
    { city: "Navi Mumbai", icon: Mumbai },
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
        {locations
          .filter((location) => location?.icon)
          .map((location, index) => (
            <Grid2
              key={index}
              item
              xs={2} // Ensures three boxes per row
              style={{
                width: "130px", // Fixed width for each grid box
                height: "120px", // Fixed height for each grid box
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "3px",
              }}
            >
              <IconButton
                className="location-box"
                name="location"
                onClick={(e) =>
                  onComplete({
                    target: {
                      name: "location",
                      value: location?.city,
                    },
                  })
                }
              >
                <img src={location?.icon} alt="icon" width="40" height="40" />
                {location?.city}
              </IconButton>
            </Grid2>
          ))}
      </Grid2>
    </div>
  );
};

export default Location;
