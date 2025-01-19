import logo from "./logo.svg";
import AppBar from "./components/AppBar/ResponsiveAppBar";
import SellCar from "./pages/SellCar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/DashboardLayout";
import EvaluationModel from "./components/SellCarModel/EvaluationModel/EvaluationModel";
import "./App.css";
import Header from "./components/TopBar/Header";
import CarDetails from "./components/CarDetails/CarDetails";

function App() {
  return (
    <div className="App">
      {/* <AppBar /> */}
      <Header />
      <Router basename="/">
        <Routes>
          <Route path="/" element={<SellCar />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/evaluation" element={<CarDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
