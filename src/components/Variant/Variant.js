import { Box, Button, Grid2, IconButton } from "@mui/material";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import EvStationIcon from "@mui/icons-material/EvStation";
// import EcoIcon from '@mui/icons-material/Eco';

const Variant = ({ onComplete }) => {
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
      </Grid2>
    </Grid2>
  );
};

export default Variant;
