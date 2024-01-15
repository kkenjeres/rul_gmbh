"use client";
import { useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

export default function Map() {
  const [geoData, setGeoData] = useState({
    lat: 48.77496429303292,
    lng: 9.174478768916563,
  });

  const center = [geoData.lat, geoData.lng];

  const customIcon = new L.Icon({
    iconUrl: "/images/pin.svg",
    iconSize: [50, 50],
    iconAnchor: [50, 50],
  });

  return (
    <MapContainer
      className="z-10 h-full rounded-br-[60px] shadow-xl"
      center={center}
      zoom={20}
      style={{ height: "500px", width: "100%" }}
      attributionControl={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {geoData.lat && geoData.lng && (
        <Marker position={[geoData.lat, geoData.lng]} icon={customIcon}>
          <Popup className="rounded-lg">
            <p className="font-spaceGrotesk text-lg">Königstraße 62 RUL</p>
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
}
