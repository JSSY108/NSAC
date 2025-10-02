const API_URL = import.meta.env.VITE_API_URL;

// Example function to call your backend
export async function fetchProbabilities(lat: number, lon: number, time: string) {
  const response = await fetch(`${API_URL}/predict`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ lat, lon, time }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}
