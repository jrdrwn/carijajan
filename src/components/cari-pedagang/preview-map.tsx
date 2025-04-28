'use client';

import { LatLng } from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

interface LocationMarkerProps {
  position: LatLng;
}

function LocationMarker({ position }: LocationMarkerProps) {
  return position === null ? null : (
    <Marker position={position}>
      <Popup>Infonya disini</Popup>
    </Marker>
  );
}

interface MapProps {
  center: [number, number];
  position: [number, number];
}

export default function PreviewMap({ center, position }: MapProps) {
  return (
    <MapContainer
      center={center}
      zoom={20}
      className="z-0 size-full rounded-xl"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker position={new LatLng(position[0], position[1])} />
    </MapContainer>
  );
}
