import { ArrowRightAltOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Grid2,
  IconButton,
  Typography,
} from "@mui/material";
import Brands from "../../Brands/Brands";
import CarNumberPlateInput from "../../CarNumberPlateInput/CarNumberPlateInput";

//Brands Image

import BMW from "./../../../assets/images/brands/bmw.jpg";
import AUDI from "./../../../assets/images/brands/audi.jpg";
import HONDA from "./../../../assets/images/brands/honda.jpg";
import HYUNDAI from "./../../../assets/images/brands/hyundai.jpg";
import MARUTI from "./../../../assets/images/brands/maruti-suzuki.jpg";
import TATA from "./../../../assets/images/brands/tata.jpg";
import TOYOTA from "./../../../assets/images/brands/toyota.jpg";
import VOLKSWAGON from "./../../../assets/images/brands/volkswagen.jpg";
import MG from "./../../../assets/images/brands/mg.jpg";
import MERCEDES from "./../../../assets/images/brands/mercedes-benz.jpg";
import PORSCHE from "./../../../assets/images/brands/porsche.jpg";

const brands = [
  {
    name: "BMW",
    img: BMW,
  },
  {
    name: "BMW",
    img: MG,
  },
  {
    name: "BMW",
    img: PORSCHE,
  },
  {
    name: "BMW",
    img: MERCEDES,
  },
  {
    name: "Audi",
    img: AUDI,
  },
  {
    name: "BMW",
    img: HONDA,
  },
  {
    name: "BMW",
    img: HYUNDAI,
  },
  {
    name: "BMW",
    img: MARUTI,
  },
  {
    name: "BMW",
    img: TATA,
  },
  {
    name: "BMW",
    img: TOYOTA,
  },
  {
    name: "BMW",
    img: VOLKSWAGON,
  },
  {
    name: "BMW",
  },
];

const InputModel = ({ handleInput, handleSubmit }) => {
  return (
    <Box>
      <Typography
        variant="h5"
        sx={{
          m: 1,
          fontWeight: "bold",
        }}
      >
        Enter your car number
      </Typography>
      <CarNumberPlateInput handleInput={handleInput} />
      <Button className="submit" variant="contained" onClick={handleSubmit}>
        Get Car Price
      </Button>
      <Divider sx={{ height: 30 }} />
      <Typography variant="h5">OR</Typography>
      <Typography variant="h5">Select your car brand to get started</Typography>
      <Grid2
        container
        spacing={2}
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px 0",
        }}
      >
        {brands.map((location, index) => (
          <Grid2
            key={index}
            xs={5} // Ensures three boxes per row
            style={{
              width: "80px", // Fixed width for each grid box
              height: "80px", // Fixed height for each grid box
              display: "flex",
              // justifyContent: "center",
              // alignItems: "center",
              margin: "2px",
            }}
          >
            <IconButton
              className="location-box"
              name="location"
              href="https://sastavahan.in/panel/?action=create"
              // onClick={(e) =>
              // onComplete({
              //   target: {
              //     name: "location",
              //     value: e.target.innerText,
              //   },
              // })
              // }
            >
              {location?.img ? <img src={location?.img} alt="icon" width="60" height="30" /> : 'View All'}
              {/* {location?.name} */}
            </IconButton>
          </Grid2>
        ))}
      </Grid2>
      {/* <Box style={{ display: "flex" }}>
        <Divider style={{ margin: "20px", width: "40%" }} />
        <Box style={{ alignContent: "center" }}>OR</Box>
        <Divider style={{ margin: "20px", width: "40%" }} />
      </Box> */}
      {/* <Typography
        variant="h6"
        sx={{
          m: 2,
        }}
      >
        Start with your brand
      </Typography>
      <Brands />
      <Button className="view-all">
        <Typography
          display={"flex"}
          fontWeight={"bold"}
          variant="h8"
          sx={{
            m: 2,
          }}
        >
          View all
          <ArrowRightAltOutlined />
        </Typography>
      </Button> */}
    </Box>
  );
};

export default InputModel;
