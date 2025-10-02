import { useState } from "react";
import InputForm from "./InputForm";
import ProbabilityCards from "./ProbabilityCards";
import GraphView from "./GraphView";
import DataTable from "./DataTable";
import DownloadButton from "./DownloadButton";
import TextExplanation from "./TextExplanation";
import React, { Suspense } from "react";
import { fetchProbabilities } from "../api";

export default function DashboardPage() {
  const [lat, setLat] = useState<string>("");
  const [lon, setLon] = useState<string>("");
  const [time, setTime] = useState<string>("");

  const MapView = React.lazy(() => import("../components/MapView"));


  const [processedData, setProcessedData] = useState<{
    probabilities: { [key: string]: number };
    trends: any[];
    raw: any[];
  } | null >(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  if (!lat || !lon || !time) return alert("Please provide latitude, longitude, and date.");

    setLoading(true);
    
  try {
    const response = await fetchProbabilities(parseFloat(lat), parseFloat(lon), time);

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
    <div className="p-6">

      <InputForm
        lat={lat}
        lon={lon}
        time={time}
        setLat={setLat}
        setLon={setLon}
        setTime={setTime}
        handleSubmit={handleSubmit}
      />

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Pick a Location on Map</h2>
        <Suspense fallback={<div>Loading map...</div>}>
          <MapView lat={lat} lon={lon} setLat={setLat} setLon={setLon} />
        </Suspense>
      </div>

      
      {loading && <p>Loading data...</p>}

      {processedData && (
        <>
          <div className="mt-6">
            <ProbabilityCards data={processedData.probabilities} />
          </div>

          <div className="mt-6">
            <GraphView data={processedData.trends} />
          </div>

          <div className="mt-6">
            <DataTable data={processedData.raw} />
          </div>
        </>
      )}

      <div className="mt-6">
        <TextExplanation />
      </div>  

        <div className="mt-4">
          <DownloadButton />
        </div>
      
    </div>
  );
}