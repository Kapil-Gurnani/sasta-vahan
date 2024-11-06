import { ArrowRightAltOutlined } from "@mui/icons-material";
import { Box, Button, Divider, Typography } from "@mui/material";
import Brands from "../../Brands/Brands";
import CarNumberPlateInput from "../../CarNumberPlateInput/CarNumberPlateInput";

const InputModel = ({handleInput,handleSubmit}) => {
  return (
    <Box>
      <Typography
        variant="h5"
        sx={{
          m: 2,
          fontWeight: "bold",
        }}
      >
        Enter your car number
      </Typography>
      <CarNumberPlateInput handleInput={handleInput} />
      <Button className="submit" variant="contained" onClick={handleSubmit}>
        Get Car Price
      </Button>
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