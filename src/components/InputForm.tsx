interface InputFormProps {
  lat: string;
  lon: string;
  time: string;
  setLat: (lat: string) => void;
  setLon: (lon: string) => void;
  setTime: (time: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const InputForm: React.FC<InputFormProps> = ({ lat, lon, time, setLat, setLon, setTime, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block font-medium">Latitude</label>
        <input
          type="text"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
          className="border p-2 w-full"
          placeholder="Enter latitude"
        />
      </div>

      <div>
        <label className="block font-medium">Longitude</label>
        <input
          type="text"
          value={lon}
          onChange={(e) => setLon(e.target.value)}
          className="border p-2 w-full"
          placeholder="Enter longitude"
        />
      </div>

      <div>
        <label className="block font-medium">Date</label>
        <input
          type="date"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="border p-2 w-full"
        />
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Fetch Data
      </button>
    </form>
  );
};

export default InputForm;
