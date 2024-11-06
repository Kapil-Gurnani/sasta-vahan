import logo from "./logo.svg";
import AppBar from "./components/AppBar/ResponsiveAppBar";
import SellCar from "./pages/SellCar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/DashboardLayout";
import EvaluationModel from "./components/SellCarModel/EvaluationModel/EvaluationModel";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppBar />
      <Router>
        <Routes>
          <Route path="/" element={<SellCar />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/evaluation" element={<EvaluationModel />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
