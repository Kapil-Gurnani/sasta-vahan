import { useState } from "react";
import { useSnackbar } from "notistack"; // MUI Snackbar hook

const useApiRequest = () => {
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar(); // Snackbar hook for error notifications

  const apiRequest = async (apiCall, ...params) => {
    setLoading(true);
    try {
      const response = await apiCall(...params);

      // Check if response is an error status
    //   if (!response.ok) {
    //     throw new Error(`HTTP Error: ${response.status}`);
    //   }

      // Return the response if successful
      return response;
    } catch (error) {
      // Handle the error with Snackbar
      console.log(error);
      let errorMessage = error.response.data.message;
    //   if (error.message.includes("400")) {
    //     errorMessage = "Invalid request. Please check the details.";
    //   } else if (error.message.includes("500")) {
    //     errorMessage = "Server error. Please try again later.";
    //   }

      enqueueSnackbar(errorMessage, { variant: "error" });
      console.error(error); // Optionally log the error to an external service
      return null; // Return null or an empty result to continue app flow
    } finally {
      setLoading(false);
    }
  };

  return { apiRequest, loading };
};

export default useApiRequest;
