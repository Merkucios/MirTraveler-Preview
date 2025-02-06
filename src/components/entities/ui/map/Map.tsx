'use client';

import 'leaflet/dist/leaflet.css';

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { MarkerData } from '../../model/map';
import L, { LatLngTuple } from 'leaflet';

const customIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

interface MapProps {
  markers: MarkerData[];
}

export default function Map({ markers }: MapProps) {
  const initialPosition = [48.4801289, 135.07898];

  return (
    <MapContainer
      center={initialPosition as LatLngTuple}
      zoom={11}
      scrollWheelZoom={true}
      attributionControl={false}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker) => (
        <Marker
          key={marker.id}
          position={[marker.latitude, marker.longitude]}
          icon={customIcon}
        >
          <Popup>
            <h3 style={{ margin: 0 }}>{marker.title}</h3>
            <p style={{ margin: 0, color: 'blue' }}>{marker.description}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
