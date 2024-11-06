import { Box, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import carService from "../../api/services/carService";
import { state } from "../../constants/constants";
import EvaluationModel from "./EvaluationModel/EvaluationModel";
import InputModel from "./InputModel/InputModel";
import OTPModel from "./OTPModel/OTPModel";
import CloseIcon from "@mui/icons-material/Close";
import TabModel from "./TabModel/TabModel";
import "./SellCarModel.css";
import { useNavigate } from "react-router-dom";

const SellCarModel = () => {
  const [carInputs, setCarInputs] = useState({});
  const [modelState, setModelState] = useState(state.INPUT_MODEL);
  const [OTPVerified, setOTPVerified] = useState(false);
  const [sellCarResponse, setSellCarResponse] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (OTPVerified) setModelState(state.EVALUATION_MODEL);
  }, [OTPVerified]);

  useEffect(() => {
    console.log(carInputs);
  }, [carInputs]);

  const handleInput = (e) => {
    setCarInputs((prevValue) => {
      return {
        ...prevValue,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await carService.getCarPrice(carInputs);
      console.log(response);
      if (response?.data?.errors) {
        alert(response?.data?.errors?.message)
      } else {
        setSellCarResponse(response.data?.data);
        setModelState(state.TAB_MODEL);
        navigate("/dashboard", { state: response.data?.data });
      }
    } catch (err) {}
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
        return <OTPModel setOTPVerified={setOTPVerified} />;
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
    <Box className="sell-car-model">
      {modelState !== state.INPUT_MODEL && (
        <IconButton
          onClick={() => setModelState(state.INPUT_MODEL)}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      )}
      {selectModel(modelState)}
    </Box>
  );
};

export default SellCarModel;