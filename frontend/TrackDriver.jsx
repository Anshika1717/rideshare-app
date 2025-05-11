import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FaMapMarkerAlt } from "react-icons/fa";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./TrackDriver.css";

const driverLocation = [28.614, 77.209];

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const TrackDriver = () => (
  <section className="track-driver">
    <h2>
      <FaMapMarkerAlt style={{ color: "#2979FF", marginRight: 10 }} />
      Track Your Driver
    </h2>
    <div className="driver-map-container">
      <MapContainer center={driverLocation} zoom={14} scrollWheelZoom={false} className="driver-map">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={driverLocation} icon={markerIcon}>
          <Popup>
            Your Driver is here!
          </Popup>
        </Marker>
      </MapContainer>
    </div>
    <div className="driver-info">
      <span>Driver: <b>Alex Rider</b></span>
      <span>Vehicle: <b>White Swift DZire</b></span>
      <span>Contact: <b>+91-9876543210</b></span>
    </div>
  </section>
);

export default TrackDriver;
