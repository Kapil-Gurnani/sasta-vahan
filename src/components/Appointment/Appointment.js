import React, { useState } from "react";
import { Button, TextField, Box } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
// import dayjs from "dayjs";

function AppointmentComponent() {
  const [selectedDateTime, setSelectedDateTime] = useState(null);

  const handleBookAppointment = () => {
    if (selectedDateTime) {
      alert(`Appointment booked for ${selectedDateTime.format('YYYY-MM-DD HH:mm')}`);
    } else {
      alert("Please select a date and time first.");
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', marginTop:'20px' }}>
      {/* <h2>Book an Appointment</h2> */}
      
      {/* DateTime Picker */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          label="Select Date & Time"
          value={selectedDateTime}
          onChange={(newValue) => setSelectedDateTime(newValue)}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      {/* Book Appointment Button */}
      <Button className="submit"
        variant="contained"
        style={{width: '50%', marginTop: '10px', marginBottom: '20px'}}
        onClick={handleBookAppointment}>
        Book Appointment
      </Button>
    </Box>
  );
}

export default AppointmentComponent;
