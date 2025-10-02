import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import DashboardPage from "./pages/DashboardPage";
import InputForm from "./components/InputForm"; // ✅ Import Form component
import "leaflet/dist/leaflet.css";
import { useState } from "react";

function App() {
  const [lat, setLat] = useState<string>(""); 
  const [lon, setLon] = useState<string>("");
  const [time, setTime] = useState<string>("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Fetching data for:", { lat, lon, time });
    // Later: call backend API here
  };
  return (
    <Router>
      <nav className="p-4 bg-blue-600 text-white flex justify-between">
        <div>
          <Link to="/" className="mr-4 hover:underline">Home</Link>
          <Link to="/dashboard" className="mr-4 hover:underline">Dashboard</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route
          path="/form"
          element={
            <InputForm
              lat={lat}
              setLat={setLat}
              lon={lon}
              setLon={setLon}
              time={time}
              setTime={setTime}
              handleSubmit={handleSubmit}
            />
          }
        />

        </Routes>
    </Router>
  );
}

export default App;

