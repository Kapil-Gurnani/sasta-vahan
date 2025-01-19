import React, { useState } from "react";
import { Button, TextField, Box } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import carService from "../../api/services/carService";
// import dayjs from "dayjs";

const AppointmentComponent = ({state}) => {
  const [selectedDateTime, setSelectedDateTime] = useState(null);

  const handleBookAppointment = () => {
    if (selectedDateTime) {
      alert(
        `Appointment booked for ${selectedDateTime.format("YYYY-MM-DD HH:mm")}`
      );
      carService.bookingAppointment({...state,bookingTime: selectedDateTime.format("YYYY-MM-DD HH:mm")})
    } else {
      alert("Please select a date and time first.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: 2,
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      {/* <h2>Book an Appointment</h2> */}

      {/* DateTime Picker */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          className="appointment"
          label="Select Date & Time"
          value={selectedDateTime}
          onChange={(newValue) => setSelectedDateTime(newValue)}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      {/* Book Appointment Button */}
      <Button
        className="submit"
        variant="contained"
        style={{
          width: "50%",
          height: "56px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
        }}
        onClick={handleBookAppointment}
      >
        Book Appointment
      </Button>
    </Box>
  );
}

export default AppointmentComponent;
