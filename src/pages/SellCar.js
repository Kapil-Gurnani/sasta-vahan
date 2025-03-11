import { Box, Grid, Grid2, Typography } from "@mui/material";
import React from "react";
import SellCarModel from "../components/SellCarModel/SellCarModel";
import background from "./../assets/images/background_image.png";
// import './App.css'; // Assuming the image is located in the 'public' folder

const SellCar = () => {
  const divStyle = {
    backgroundImage: `url(${background})`, // Replace with your image path
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "calc(100vh - 99px)",
    height: "100%", // Adjust height as necessary
    width: "100%",
  };

  return (
    // <div style={divStyle}>
    <Box
      sx={{ width: "100%" }}
      style={{
        backgroundImage: `url(${background})`, // Replace with your image path
        backgroundSize: "cover",
        objectFit: 'cover',
        backgroundPosition: "center",
        minHeight: "calc(100vh - 40px)",
        height: "100%", // Adjust height as necessary
        width: "100%",
        // color: "white",
        display: "flex",
        flexDirection: "column",
        paddingTop: "40px",
        // justifyContent: "space-between",
      }}
    >
      <Grid container spacing={2} marginTop="90px">
        <Grid xs={6} sx={{ display: { xs: "none", md: "flex" } }}>
          <Typography
            variant="h2"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "flex" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              textWrap: "wrap",
              width: "100%",
              color: "white",
              justifyContent: "flex-start", // Align to left
            }}
          >
            {/* Sell your car in minutes */}
          </Typography>
        </Grid>
        <Grid xs={12} md={5} style={{ display: "flex", justifyContent: "center" }} sx={{ display: { xs: "flex", md: "none" } }}>
          <SellCarModel />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SellCar;
