import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, openSnackbar: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to trigger Snackbar and display error message
    return { hasError: true, error, openSnackbar: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to the console or an external service
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
    if (this.props.logError) {
      this.props.logError(error, errorInfo);
    }
  }

  handleSnackbarClose = () => {
    this.setState({ openSnackbar: false });
  };

  render() {
    if (this.state.hasError) {
      // Optionally render fallback UI
      return <h1>An unexpected error occurred. Please refresh the page.</h1>;
    }

    const errorMessage = this.state.error?.message || "An unexpected error occurred.";

    return (
      <>
        {this.props.children}
        <Snackbar
          open={this.state.openSnackbar}
          autoHideDuration={5000} // Snackbar visible for 5 seconds
          onClose={this.handleSnackbarClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={this.handleSnackbarClose}
            severity="error" // Red color to indicate error
            sx={{ width: "100%" }}
          >
            {errorMessage}
          </Alert>
        </Snackbar>
      </>
    );
  }
}

export default ErrorBoundary;
