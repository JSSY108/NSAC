import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center">
      <h1 className="text-4xl font-bold mb-6">NASA Weather Probability Dashboard</h1>
      <p className="text-lg mb-6 max-w-xl">
        Explore Earth observation data from NASA and understand the likelihood of extreme
        weather events at your chosen location and time.
      </p>
      <Link
        to="/dashboard"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Go to Dashboard
      </Link>
    </div>

  );
}
