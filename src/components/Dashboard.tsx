import { useState } from "react";
import MapView from "../components/MapView";
import InputForm from "./InputForm";
import ProbabilityCards from "./ProbabilityCards";
import GraphView from "./GraphView";
import DataTable from "./DataTable";
import DownloadButton from "./DownloadButton";
import TextExplanation from "./TextExplanation";
import "./styles/dashboard.css";

export default function DashboardPage() {
  const [lat, setLat] = useState<string>("");
  const [lon, setLon] = useState<string>("");
  const [time, setTime] = useState<string>("");

  const [processedData, setProcessedData] = useState<{
    probabilities: { [key: string]: number };
    trends: any[];
    raw: any[];
  } | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!lat || !lon || !time)
      return alert("Please provide latitude, longitude, and date.");

    setLoading(true);
    const payload = { lat, lon, time };

    try {
      const response = await fetch(
        "https://qk0ydp1cdl.execute-api.us-west-2.amazonaws.com/predict",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();

      console.log("Processed data:", result);
      setProcessedData(result);
      // Update state to display results
    } catch (error) {
      console.error("Error fetching prediction:", error);
      alert("Error fetching prediction. Please try again.");
    } finally {
      setLoading(false);
    }
  };

return (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 p-6">
    <div className="max-w-7xl mx-auto space-y-8">
      
      {/* Input Section */}
      <div className="bg-gray-800 shadow-lg rounded-xl p-6 border border-gray-700">
        <h2 className="text-2xl font-bold text-white mb-4">Input Parameters</h2>
        <InputForm
          lat={lat}
          lon={lon}
          time={time}
          setLat={setLat}
          setLon={setLon}
          setTime={setTime}
          handleSubmit={handleSubmit}
        />
      </div>

      {/* Map Section */}
      <div className="bg-gray-800 shadow-lg rounded-xl p-6 border border-gray-700">
        <h2 className="text-xl font-semibold text-gray-200 mb-2">Pick a Location on Map</h2>
        <div className="rounded-lg overflow-hidden border border-gray-600">
          <MapView lat={lat} lon={lon} setLat={setLat} setLon={setLon} />
        </div>
      </div>

      {/* Loading */}
      {loading && (
        <div className="text-center text-blue-400 font-medium">
          Loading data...
        </div>
      )}

      {/* Results */}
      {processedData && (
        <>
          <div className="bg-gray-800 shadow-lg rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold text-gray-200 mb-4">Probabilities</h2>
            <ProbabilityCards data={processedData.probabilities} />
          </div>

          <div className="bg-gray-800 shadow-lg rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold text-gray-200 mb-4">Trends</h2>
            <GraphView data={processedData.trends} />
          </div>

          <div className="bg-gray-800 shadow-lg rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold text-gray-200 mb-4">Raw Data</h2>
            <DataTable data={processedData.raw} />
          </div>
        </>
      )}

      {/* Explanation */}
      <div className="bg-gray-800 shadow-lg rounded-xl p-6 border border-gray-700">
        <h2 className="text-xl font-semibold text-gray-200 mb-4">Explanation</h2>
        <TextExplanation />
      </div>

      {/* Download Button */}
      <div className="flex justify-end">
        <DownloadButton />
      </div>
    </div>
  </div>
);
}