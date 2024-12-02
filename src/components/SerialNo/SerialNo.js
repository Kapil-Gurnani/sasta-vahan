import {
  Box,
  Button,
  FormControl,
  Grid2,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
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
      <Grid2
        key={3}
        xs={12} // Ensures three boxes per row
      >
        <Typography variant="h4" color={"black"}>
          Select the ownership history of your car
        </Typography>
      </Grid2>
      <FormControl
        variant="outlined"
        style={{ width: "100%", margin: "10px 0" }}
      >
        <InputLabel id="year-select-label">Ownerhip History</InputLabel>
        <Select
          labelId="year-select-label"
          // value={selectedYear?.["registration-year"]}
          onChange={(e) => setSerialNo(e.target.value)}
          label="Serial No."
          name="serialNo"
        >
          {[
            "1st Owner",
            "2nd Owner",
            "3rd Owner",
            "4th Owner",
            "Beyond 4th Owner",
          ].map((year) => (
            <MenuItem key={year} value={year}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
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
