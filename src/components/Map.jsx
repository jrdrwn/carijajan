"use client";
import { useRef, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click(e) {
      console.log(e.latlng);
      map.locate({ setView: true, maxZoom: 16, enableHighAccuracy: true });
    },
    locationfound(e) {
      map.flyTo(e.latlng, map.getZoom());
      setPosition(e.latlng);
    },
    locationerror(e) {
      console.log(e.message);
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}
export default function Map() {
  const mapRef = useRef(null);
  const latitude = 51.505;
  const longitude = -0.09;

  return (
    // Make sure you set the height and width of the map container otherwise the map won't show
    <MapContainer center={[latitude, longitude]} zoom={13} ref={mapRef}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
  );
}
