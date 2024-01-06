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
    iconAnchor: [25, 50], // Обновите это для корректного отображения икон
  });

  return (
      <MapContainer
        className="z-0 m-auto rounded-lg shadow-xl border border-black"
        center={center}
        zoom={20}
        style={{ height: "400px", width: "80%" }}
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
