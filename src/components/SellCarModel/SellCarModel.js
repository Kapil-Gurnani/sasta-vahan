import { Box, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import carService from "../../api/services/carService";
import { state } from "../../constants/constants";
import EvaluationModel from "./EvaluationModel/EvaluationModel";
import InputModel from "./InputModel/InputModel";
import OTPModel from "./OTPModel/OTPModel";
import CloseIcon from "@mui/icons-material/Close";
import TabModel from "./TabModel/TabModel";
import { useNavigate } from "react-router-dom";
import useApiRequest from "../../api/useApiRequest"; // Import the custom hook
import "./SellCarModel.css";


const SellCarModel = () => {
  const [carInputs, setCarInputs] = useState({});
  const [modelState, setModelState] = useState(state.OTP_MODEL);
  const [OTPVerified, setOTPVerified] = useState(false);
  const [sellCarResponse, setSellCarResponse] = useState({});
  const navigate = useNavigate();
  const { apiRequest, loading } = useApiRequest(); // Use the hook

  useEffect(() => {
    if (OTPVerified) setModelState(state.EVALUATION_MODEL);
  }, [OTPVerified]);

  const handleInput = (e) => {
    setCarInputs((prevValue) => {
      return {
        ...prevValue,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async () => {
      const response = await apiRequest(carService.getCarPrice,carInputs);
      if (response){
        setSellCarResponse(response.data?.evaluationDetails);
        setModelState(state.TAB_MODEL);
        navigate("/dashboard", { state: {...response?.data?.evaluationDetails, ...carInputs} });
      }
  };
  const vehicleData = {
    vehicleNum: "DL9CAM9757",
    make: "HYUNDAI",
    model: "I20(2015-2017)",
    color: "PEARL WHITE",
    fairPrice: 527870,
    bestPrice: 560521,
  };

  const selectModel = (st) => {
    switch (st) {
      case state.INPUT_MODEL:
        return (
          <InputModel handleInput={handleInput} handleSubmit={handleSubmit} />
        );
      case state.EVALUATION_MODEL:
        return <EvaluationModel vehicle={{ ...vehicleData, ...carInputs }} />;
      case state.OTP_MODEL:
        return <OTPModel setOTPVerified={setOTPVerified} onComplete={(e)=>{
          setModelState(state.INPUT_MODEL)
          handleInput(e);
        } 
        }/>;
      case state.TAB_MODEL:
        return (
          <TabModel
            carInputs={carInputs}
            handleInput={handleInput}
            setModelState={setModelState}
            sellCarResponse={sellCarResponse}
          />
        );
      default:
        return (
          <InputModel handleInput={handleInput} handleSubmit={handleSubmit} />
        );
    }
  };

  return (
    <Box>
      <Typography variant="h3" color={"white"} width={"90%"}padding={'2px 0 0 40px'} display={'flex'}>
        Sell your car online
      </Typography>
      <Box className="sell-car-model">
        {selectModel(modelState)}
      </Box>
    </Box>
  );
};

export default SellCarModel;
