import React, { useState } from "react";
import {
  Card,
  Grid,
  Typography,
  Box,
  Button,
  Divider,
  Avatar,
} from "@mui/material";
import CarIcon from "@mui/icons-material/DirectionsCar";
import AppointmentComponent from "../Appointment/Appointment";

import background from "./../../assets/images/evaluation_bg.jpg";
import background2 from "./../../assets/images/bg.jpg";
import { useLocation } from "react-router-dom";
import CAR from "./../../assets/images/car.png";
import CAR2 from "./../../assets/images/car2.avif";
import FAIR from "./../../assets/images/fair.png";
import BEST from "./../../assets/images/best.png";
import EXCELLENT from "./../../assets/images/excellent.png";

const CarDetails = () => {
  const location = useLocation();
  // State for the selected price category
  const [selectedPrice, setSelectedPrice] = useState(1);
  const { state } = location;

  const getFormattedPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  };

  // Price options
  const priceOptions = [
    {
      label: "Fair",
      value: `₹${getFormattedPrice(state?.fairPrice)}`,
    },
    {
      label: "Best",
      value: `₹${getFormattedPrice((state?.bestPrice + state?.fairPrice) / 2)}`,
    },
    {
      label: "Excellent",
      value: `₹${getFormattedPrice(state?.bestPrice)}`,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${background2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "80vh",
        padding: "20px",
        color: "white",
      }}
    >
      <Card
        sx={{
          padding: 4,
          backgroundColor: "#fff",
          borderRadius: 2,
          boxShadow: 3,
          maxWidth: 600,
          margin: "auto",
          marginTop: "30px",
        }}
      >
        {/* Car Name and Number */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 3,
          }}
        >
          {state?.make} {state?.model}
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: 3,
            }}
          >
            {state?.vehicleNum}
          </Typography>
        </Typography>

        {/* Car Details Section */}
        <Grid
          container
          spacing={2}
          sx={{
            textAlign: "center",
            marginBottom: 4,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {[
            state?.color,
            state?.["registration-year"],
            state?.variant,
            state?.location,
          ].map((detail, index) => (
            <>
              <Grid
                item
                xs={2}
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  minWidth: index === 0 ? 130 : 70,
                  padding: 0,
                }}
              >
                <Typography
                  variant="h7"
                  sx={{ fontWeight: "500", color: "text.secondary" }}
                >
                  {detail}
                </Typography>
              </Grid>
              {index !== 3 ? <Box>|</Box> : ""}
            </>
          ))}
        </Grid>

        {/* Selling Price Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            textAlign: "center",
            padding: 4,
            backgroundColor: "#f9f9f9",
            borderRadius: 2,
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
            marginBottom: 3,
          }}
        >
          <Box
            sx={{
              alignContent: "center",
            }}
          >
            <Avatar
              src={CAR2}
              alt="jpg-icon"
              sx={{
                width: 120, // Set the width
                height: 120, // Set the height
                borderRadius: 2, // Adjust border radius for a rectangular shape
              }}
            />
            {/* <CarIcon sx={{ width: "10vw", height: "auto", mr: 1 }} /> */}
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              sx={{ marginBottom: 2, fontWeight: "bold" }}
            >
              Estimated Selling Price
            </Typography>
            {priceOptions[selectedPrice].label === "Fair" && (
              <Avatar
                src={FAIR}
                alt="jpg-icon"
                sx={{
                  width: 180, // Set the width
                  height: 100, // Set the height
                  borderRadius: 2, // Adjust border radius for a rectangular shape
                }}
              />
            )}
            {priceOptions[selectedPrice].label === "Excellent" && (
              <Avatar
                src={EXCELLENT}
                alt="jpg-icon"
                sx={{
                  width: 180, // Set the width
                  height: 100, // Set the height
                  borderRadius: 2, // Adjust border radius for a rectangular shape
                }}
              />
            )}
            {priceOptions[selectedPrice].label === "Best" && (
              <Avatar
                src={BEST}
                alt="jpg-icon"
                sx={{
                  width: 180, // Set the width
                  height: 100, // Set the height
                  borderRadius: 2, // Adjust border radius for a rectangular shape
                }}
              />
            )}{" "}
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "#f27679", marginBottom: 1 }}
            >
              {priceOptions[selectedPrice].value}
            </Typography>
          </Box>
        </Box>

        {/* Clickable Buttons/Boxes */}
        <Grid container spacing={2} justifyContent="center">
          {priceOptions.map((option, index) => (
            <Grid item key={index}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor:
                    selectedPrice === index ? "#e31e24" : "darkgrey",
                  color: "#fff",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor:
                      selectedPrice === index ? "#f27679" : "#bbb",
                  },
                  minWidth: "150px",
                }}
                onClick={() => setSelectedPrice(index)}
              >
                {option.label}
              </Button>
            </Grid>
          ))}
        </Grid>
        <Divider width="100%" style={{ marginTop: "20px" }} />
        <AppointmentComponent state={state} />
      </Card>
    </Box>
  );
};

export default CarDetails;
