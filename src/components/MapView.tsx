import { MapContainer, TileLayer, Marker, useMap, useMapEvents } from 'react-leaflet';
import { useEffect, useState } from 'react';

interface MapViewProps {
  lat: string;
  lon: string;
  setLat: (lat: string) => void;
  setLon: (lon: string) => void;
}

const MapView = ({ lat, lon, setLat, setLon }: MapViewProps) => {
  const [position, setPosition] = useState<[number, number] | null>(
    lat && lon ? [parseFloat(lat), parseFloat(lon)] : null
  );

useEffect(() => {
    if (lat && lon) {
        const newPos: [number, number] = [parseFloat(lat), parseFloat(lon)];
        setPosition(newPos);
    }
  }, [lat, lon]);

  const MapClickHandler = () => {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setPosition([lat, lng]);
        setLat(lat.toFixed(4));
        setLon(lng.toFixed(4));
      },
    });
    return null;
  };

  const MapCenterUpdater = () => {
    const map = useMap();
    useEffect(() => {
        if (position) {
            map.setView(position, map.getZoom());
        }
    }, [position, map]);
    return null;
  }

  return (
    <MapContainer center={position || [51.505, -0.09]} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapClickHandler />
      <MapCenterUpdater />
      {position && <Marker position={position} />}
    </MapContainer>
  );
};

export default MapView;
