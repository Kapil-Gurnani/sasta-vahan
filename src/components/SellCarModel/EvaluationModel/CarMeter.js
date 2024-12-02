import React from "react";
import { Box, Typography } from "@mui/material";
// import DirectionsCarIcon from "@mui/icons-material/DirectionsCar"; // Car icon from MUI

const CarMeter = ({ price, minPrice = 0, maxPrice }) => {
  // Map price to an angle within 180° range
  const getNeedleRotation = () => {
    const clampedPrice = Math.max(minPrice, Math.min(price, maxPrice)); // Clamp within range
    const percentage = (clampedPrice - minPrice) / (maxPrice - minPrice);
    return percentage * 360; // Map to 0-180° for half-circle
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "15rem",
        height: "5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // top: '40px'
      }}
    >
      {/* Car Icon (Background)
      <DirectionsCarIcon
        sx={{
          position: "absolute",
          fontSize: "8rem", // Adjust size as needed
          color: "lightgrey",
          bottom: "0.5rem", // Position just below the meter
        }}
      /> */}
      {/* Background Arc */}
      <Box
        sx={{
        //   position: "absolute",
          width: "15rem",
          height: "20rem",
          borderRadius: "50%",
          background: `conic-gradient(
            #e31e24 0deg 60deg, 
            #fbd0d1 60deg 120deg, 
            green 120deg 180deg
          )`,
          clipPath: "inset(0 0 0 50%)", // Show only the top half
          transform: "rotate(-90deg)", // Start from left
        }}
      />

      {/* Needle */}
      <Box
        sx={{
          position: "absolute",
          width: "2px",
          height: "4rem",
          backgroundColor: "black",
          transformOrigin: "center top",
          top: "40px",
          transform: `rotate(${getNeedleRotation()}deg)`,
          transition: "transform 0.3s ease", // Smooth transition for the needle
        }}
      />

      {/* Labels */}
      <Box
        sx={{
          position: "absolute",
          top: "-25%",
          left: "10%",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" color="white">
          Fair
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "-85%",
          left: "40%",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" color="white">
          Best
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "-25%",
          left: "70%",
          textAlign: "center",
        }}
      >
        <Typography variant="h6" color="white">
          Excellent
        </Typography>
      </Box>
    </Box>
  );
};

export default CarMeter;
