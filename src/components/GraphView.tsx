import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

interface Trend {
  month: string;
  heatwave: number;
  rain: number;
}

interface GraphViewProps {
  data: Trend[];
}

const GraphView: React.FC<GraphViewProps> = ({ data }) => {
  return (
    <LineChart width={600} height={300} data={data}>
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="heatwave" stroke="#ff0000" />
      <Line type="monotone" dataKey="rain" stroke="#0000ff" />
    </LineChart>
  );
};

export default GraphView;
