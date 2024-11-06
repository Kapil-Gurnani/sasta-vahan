import { Box, Button, Grid2, IconButton, TextField } from "@mui/material";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import EvStationIcon from "@mui/icons-material/EvStation";
import { useState } from "react";
// import EcoIcon from '@mui/icons-material/Eco';

const SerialNo = ({ onComplete }) => {
  const [serialNo, setSerialNo] = useState("");
  return (
    <Grid2
      container
      spacing={2}
      style={{
        display: "flex",
        justifyContent: "center",
        width: "50%",
        backgroundColor: "white",
        padding: "10px",
        borderRadius: "20px",
      }}
    >
      <TextField
        label="Serial No."
        variant="outlined"
        // value={otp}
        InputLabelProps={{
          style: { color: "#f27679" }, // Change to your desired color
        }}
        value={serialNo}
        onChange={(e) => setSerialNo(e.target.value)}
        placeholder="Enter Serial No."
        fullWidth
        sx={{ maxWidth: "300px" }}
      />
      <Button
        variant="contained"
        className={`submit`}
        name="serialNo"
        // disabled={mobileNumber.length !== 10}
        onClick={() =>
          onComplete({
            target: {
              name: "serialNo",
              value: serialNo,
            },
          })
        }
      >
        Submit
      </Button>
      {/* <Grid2
        key={3}
        xs={4} // Ensures three boxes per row
        style={{
          width: "150px", // Fixed width for each grid box
          height: "150px", // Fixed height for each grid box
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px",
        }}
      >
        <IconButton
          className="location-box"
          name="variant"
          value="Petrol"
          onClick={onComplete}
        >
          <LocalGasStationIcon color="black" />
          Petrol
        </IconButton>
      </Grid2>

      <Grid2
        key={3}
        xs={4} // Ensures three boxes per row
        style={{
          width: "150px", // Fixed width for each grid box
          height: "150px", // Fixed height for each grid box
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px",
        }}
      >
        <IconButton
          className="location-box"
          name="variant"
          value="Diesel"
          onClick={onComplete}
        >
          <EvStationIcon color="black" />
          Diesel
        </IconButton>
      </Grid2>
      <Grid2
        key={3}
        xs={4} // Ensures three boxes per row
        style={{
          width: "150px", // Fixed width for each grid box
          height: "150px", // Fixed height for each grid box
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px",
        }}
      >
        <IconButton
          className="location-box"
          name="variant"
          value="CNG"
          onClick={onComplete}
        >
          <EvStationIcon color="black" />
          CNG
        </IconButton>
      </Grid2> */}
    </Grid2>
  );
};

export default SerialNo;
