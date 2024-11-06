import { Grid, Grid2, Typography } from "@mui/material";
import React from "react";
import SellCarModel from "../components/SellCarModel/SellCarModel";
import background from "./../assets/images/background_image.png";
// import './App.css'; // Assuming the image is located in the 'public' folder

const SellCar = () => {
  const divStyle = {
    backgroundImage: `url(${background})`, // Replace with your image path
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%", // Adjust height as necessary
    width: "100%",
  };

  return (
    <div style={divStyle}>
      <Grid container spacing={2}>
        <Grid xs={6}>
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
        <Grid xs={6} style={{display: 'flex',justifyContent:'center'}}>
            <SellCarModel />
        </Grid>
      </Grid>
    </div>
  );
};

export default SellCar;
