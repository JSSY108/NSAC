import React from "react";

interface InputFormProps {
  lat: string;
  lon: string;
  time: string;
  setLat: (lat: string) => void;
  setLon: (lon: string) => void;
  setTime: (time: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const InputForm = ({ lat, lon, time, setLat, setLon, setTime, handleSubmit }: InputFormProps) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700"
    >
      <h2 className="text-lg font-semibold text-blue-400 mb-4">Enter Location & Time</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-gray-300 mb-2">Latitude</label>
          <input
            type="text"
            value={lat}
            onChange={(e) => setLat(e.target.value)}
            className="w-full p-2 rounded-md bg-gray-900 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="range: -90 to 90"
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Longitude</label>
          <input
            type="text"
            value={lon}
            onChange={(e) => setLon(e.target.value)}
            className="w-full p-2 rounded-md bg-gray-900 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="range: -180 to 180"
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Date</label>
          <input
            type="date"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full p-2 rounded-md bg-gray-900 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-md"
      >
        Submit
      </button>
    </form>
  );
};

export default InputForm;

