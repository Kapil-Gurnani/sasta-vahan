import {
  Avatar,
  Box,
  Button,
  Grid2,
  IconButton,
  Typography,
} from "@mui/material";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import EvStationIcon from "@mui/icons-material/EvStation";
import CNG from "./../../assets/images/CNG.png";
import Petrol from "./../../assets/images/Petrol.png";
import Diesel from "./../../assets/images/Diesel.png";
// import EcoIcon from '@mui/icons-material/Eco';

const Variant = ({ onComplete }) => {
  return (
    <Grid2
      container
      spacing={2}
      style={{
        display: "flex",
        flexDirection: "column",
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
          Select the variant of your car
        </Typography>
      </Grid2>
      <Grid2
        key={3}
        xs={12} // Ensures three boxes per row
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Grid2
          key={3}
          xs={12} // Ensures three boxes per row
          style={{
            width: "100px", // Fixed width for each grid box
            height: "100px", // Fixed height for each grid box
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            margin: "10px",
          }}
        >
          <IconButton
            className="location-box"
            name="variant"
            value="Petrol"
            onClick={() =>
              onComplete({
                target: {
                  name: "variant",
                  value: "Petrol",
                },
              })
            }
          >
            <Avatar src={Petrol} alt="jpg-icon" />
            {/* <LocalGasStationIcon color="black" fontSize="large" /> */}
            Petrol
          </IconButton>
        </Grid2>

        <Grid2
          key={3}
          xs={4} // Ensures three boxes per row
          style={{
            width: "100px", // Fixed width for each grid box
            height: "100px", // Fixed height for each grid box
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
            onClick={() =>
              onComplete({
                target: {
                  name: "variant",
                  value: "Diesel",
                },
              })
            }
          >
            <Avatar src={Diesel} alt="jpg-icon" />
            {/* <EvStationIcon color="black" fontSize="large" /> */}
            Diesel
          </IconButton>
        </Grid2>
        <Grid2
          key={3}
          xs={4} // Ensures three boxes per row
          style={{
            width: "100px", // Fixed width for each grid box
            height: "100px", // Fixed height for each grid box
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
            onClick={() =>
              onComplete({
                target: {
                  name: "variant",
                  value: "CNG",
                },
              })
            }
          >
            <Avatar src={CNG} alt="jpg-icon" />
            {/* <img
            src={CNG}
            alt="jpg-icon"
            style={{ width: 24, height: 24 }}
          /> */}
            {/* <EvStationIcon color="black" fontSize="large" /> */}
            CNG
          </IconButton>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default Variant;
