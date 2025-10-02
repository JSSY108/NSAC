// ProbabilityCards.tsx
import React from "react";

interface ProbabilityCards {
  data: {
    [key: string]: number; // e.g., { heatwave: 50, heavy_rain: 30 }
  };
}

const ProbabilityCards: React.FC<ProbabilityCards> = ({ data }) => {
  return (
    <div className="flex gap-4">
      {Object.entries(data).map(([key, value]) => (
        <div key={key} className="p-4 border rounded">
          <h3 className="font-bold">{key}</h3>
          <p>{value}%</p>
        </div>
      ))}
    </div>
  );
};

export default ProbabilityCards;
