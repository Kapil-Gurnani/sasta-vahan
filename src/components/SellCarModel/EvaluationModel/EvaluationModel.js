import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import AppointmentComponent from "../../Appointment/Appointment";
import { motion } from "framer-motion";
import background from "./../../../assets/images/evaluation_bg.webp";

const EvaluationModel = () => {
  const location = useLocation();
  const { state } = location;
  console.log(location);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${background})`, // Replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%", // Adjust height as necessary
        width: "100%",
      }}
    >
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "-webkit-fill-available",
          color: "white",
        }}
      >
        <Typography variant="h3">Fair Price</Typography>
        <Typography variant="h3">
          ₹
          {new Intl.NumberFormat("en-IN", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }).format(state?.fairPrice)}
        </Typography>
      </Box>
      <div style={{ padding: "50px", width: "100%" }}>
        <TableContainer
          component={Paper}
          sx={{
            maxWidth: 600,
            margin: "auto",
            height: "-webkit-fill-available",
          }}
        >
          <Typography
            variant="h5"
            component="div"
            align="center"
            sx={{ padding: 2 }}
          >
            Vehicle Details
          </Typography>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell align="left">
                  <strong>Vehicle Number</strong>
                </TableCell>
                <TableCell align="right">{state?.vehicleNum}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="left">
                  <strong>Make</strong>
                </TableCell>
                <TableCell align="right">{state?.make}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="left">
                  <strong>Model</strong>
                </TableCell>
                <TableCell align="right">{state?.model}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="left">
                  <strong>Color</strong>
                </TableCell>
                <TableCell align="right">{state?.color}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">
                  <strong>Registration Year</strong>
                </TableCell>
                <TableCell align="right">
                  {state?.["registration-year"]}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">
                  <strong>Location</strong>
                </TableCell>
                <TableCell align="right">{state?.location}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">
                  <strong>Variant</strong>
                </TableCell>
                <TableCell align="right">{state?.variant}</TableCell>
              </TableRow>

              {/* <TableRow>
                <TableCell align="left">
                  <strong>Fair Price</strong>
                </TableCell>
                <TableCell align="right">
                  ₹
                  {new Intl.NumberFormat("en-IN", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }).format(state?.fairPrice)}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="left">
                  <strong>Best Price</strong>
                </TableCell>
                <TableCell align="right">
                  ₹
                  {new Intl.NumberFormat("en-IN", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }).format(state?.bestPrice)}
                </TableCell>
              </TableRow> */}
            </TableBody>
          </Table>
          <AppointmentComponent />
        </TableContainer>
      </div>
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "-webkit-fill-available",
          color: "white",
        }}
      >
        <Typography variant="h3">Best Price</Typography>
        <Typography variant="h3">
          ₹
          {new Intl.NumberFormat("en-IN", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }).format(state?.bestPrice)}
        </Typography>
      </Box>
    </div>
  );
};

export default EvaluationModel;
