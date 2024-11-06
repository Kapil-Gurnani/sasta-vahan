import React from "react";
import { IconButton } from "@mui/material";
import { Box } from "@mui/system"; // Optional for styling
import MyIcon from "./../../assets/images/logo.png";
// import MyIcon from "./path-to-your-image.png"; // Import your image

const Logo = () => {
  return (
    <Box>
      <IconButton>
        <img
          src={MyIcon}
          alt="icon"
          style={{ width: "200px", height: "40px", margin: "20px" }}
        />
      </IconButton>
    </Box>
  );
};

export default Logo;
