import React from "react";

interface RawData {
  lat: string | number;
  lon: string | number;
  time: string;
  value: number;
}

interface DataTableProps {
  data: RawData[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <table className="border-collapse border border-gray-300 w-full">
      <thead>
        <tr>
          <th className="border p-2">Latitude</th>
          <th className="border p-2">Longitude</th>
          <th className="border p-2">Time</th>
          <th className="border p-2">Value</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td className="border p-2">{row.lat}</td>
            <td className="border p-2">{row.lon}</td>
            <td className="border p-2">{row.time}</td>
            <td className="border p-2">{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
