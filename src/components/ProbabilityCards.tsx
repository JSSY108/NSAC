interface ProbabilityCardsProps {
  data: { [key: string]: number };
}

const ProbabilityCards: React.FC<ProbabilityCardsProps> = ({ data }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {Object.entries(data).map(([key, value]) => (
        <div key={key} className="dashboard-card flex flex-col items-center justify-center w-36">
          <h4 className="dashboard-subtitle text-center capitalize">{key.replace('_', ' ')}</h4>
          <div className="text-2xl font-bold text-blue-500">{value}%</div>
        </div>
      ))}
    </div>
  );
};

export default ProbabilityCards;
