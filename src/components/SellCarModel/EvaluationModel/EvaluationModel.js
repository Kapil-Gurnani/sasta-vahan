import React, { useState } from "react";
import { Paper, Typography, Box, Grid, Button, Divider } from "@mui/material";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import CarIcon from "@mui/icons-material/DirectionsCar";
import BuildIcon from "@mui/icons-material/Build";
import ModelIcon from "@mui/icons-material/Category";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import VariantIcon from "@mui/icons-material/Tune"; // Substitute with an icon that best represents "variant"
import AppointmentComponent from "../../Appointment/Appointment";
import background from "./../../../assets/images/evaluation_bg.jpg";
import CarMeter from "./CarMeter";

const EvaluationModel = () => {
  const location = useLocation();
  const [priceIndex, setPriceIndex] = useState(1);
  const { state } = location;
  const details = [
    { label: "Vehicle Number", value: state?.vehicleNum, icon: <CarIcon /> },
    { label: "Make", value: state?.make, icon: <BuildIcon /> },
    { label: "Model", value: state?.model, icon: <ModelIcon /> },
    { label: "Color", value: state?.color, icon: <ColorLensIcon /> },
    {
      label: "Registration Year",
      value: state?.["registration-year"],
      icon: <CalendarTodayIcon />,
    },
    { label: "Location", value: state?.location, icon: <LocationOnIcon /> },
    { label: "Variant", value: state?.variant, icon: <VariantIcon /> },
  ];

  const getFormattedPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  };

  const getPrice = () => {
    return priceIndex === 0
      ? state?.fairPrice
      : priceIndex === 1
      ? (state?.bestPrice + state?.fairPrice) / 2
      : state?.bestPrice;
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "40px",
        color: "white",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "800px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CarMeter
          price={getPrice()}
          maxPrice={state?.bestPrice + 30000}
          minPrice={state?.fairPrice - 30000}
        />
        {/* Price Indicator */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Typography variant="h5">
            ₹
            {priceIndex === 0
              ? `${getFormattedPrice(state?.fairPrice)} - ₹${getFormattedPrice(
                  (state?.bestPrice + state?.fairPrice) / 2
                )}`
              : priceIndex === 1
              ? getFormattedPrice((state?.bestPrice + state?.fairPrice) / 2)
              : `${getFormattedPrice(
                  (state?.bestPrice + state?.fairPrice) / 2
                )} - ₹${getFormattedPrice(state?.bestPrice)}`}
          </Typography>
        </Box>
        <Grid container spacing={2} sx={{ margin: "10px 10px 40px 10px" }}>
          {["Fair Price", "Best Price", "Excellent Price"].map(
            (label, index) => (
              <Grid item xs={4} key={label}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "10px",
                    backgroundColor: priceIndex === index ? "#f27679" : "white",
                    color: "black",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                    cursor: "pointer",
                  }}
                  onClick={() => setPriceIndex(index)}
                >
                  <Typography variant="h6">{label}</Typography>
                </Box>
              </Grid>
            )
          )}
        </Grid>
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Paper
            sx={{
              maxWidth: 600,
              minWidth: 400,
              margin: "auto",
              padding: 2,
              backgroundColor: "white",
              color: "black",
              borderRadius: "12px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
            }}
          >
            <Typography
              variant="h5"
              sx={{ marginBottom: 2, textAlign: "center" }}
            >
              Vehicle Details
            </Typography>
            <Divider sx={{ marginBottom: 2 }} />

            <Box>
              {details.map(({ label, value, icon }) => (
                <Box
                  key={label}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingY: 1,
                    // borderBottom: "1px solid rgba(0,0,0,0.1)",
                    // "&:last-child": { borderBottom: "none" },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    {icon}
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      {label}
                    </Typography>
                  </Box>
                  <Typography variant="body2">{value}</Typography>
                </Box>
              ))}
            </Box>
          </Paper>
          <AppointmentComponent state={state} />
        </Box>
      </Box>
    </Box>
  );
};

export default EvaluationModel;
