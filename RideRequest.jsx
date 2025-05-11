import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { FaMapMarkerAlt, FaRegDotCircle } from "react-icons/fa";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./RideRequest.css";

// Haversine formula to calculate distance in km between two lat/lng points
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth radius in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in km
}

// Actual fare calculation
const calculateFare = (pickup, destination) => {
  if (!pickup || !destination) return 0;

  const distance = calculateDistance(
    pickup.lat,
    pickup.lng,
    destination.lat,
    destination.lng
  );

  // Assume average speed of 40 km/h to estimate time
  const averageSpeed = 40; // km/h
  const duration = (distance / averageSpeed) * 60; // in minutes

  // Fare calculation parameters
  const baseFare = 50;
  const costPerKm = 15;
  const costPerMinute = 2;

  const fare =
    baseFare +
    costPerKm * distance +
    costPerMinute * duration;

  return Math.round(fare * 100) / 100; // Round to 2 decimals
};

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

function LocationMarker({ position, setPosition, label }) {
  useMapEvents({
    click(e) {
      setPosition(e.latlng);
    },
  });
  return position === null ? null : (
    <Marker position={position} icon={markerIcon}>
      <div>{label}</div>
    </Marker>
  );
}

const RideRequest = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pickup, setPickup] = useState(null);
  const [pickupText, setPickupText] = useState("");
  const [destination, setDestination] = useState(null);
  const [destinationText, setDestinationText] = useState("");
  const [fare, setFare] = useState(0);

  // Check authentication status and update on localStorage change
  useEffect(() => {
    const checkAuth = () => {
      const userId = localStorage.getItem("user_id");
      setIsAuthenticated(!!userId);
    };

    // Initial check
    checkAuth();

    // Listen for storage changes (login/logout from other tabs or windows)
    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  // Update fare whenever pickup or destination changes
  useEffect(() => {
    if (pickup && destination) {
      setFare(calculateFare(pickup, destination));
    } else {
      setFare(0);
    }
  }, [pickup, destination]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!pickup || !destination || !pickupText || !destinationText) {
      alert("Please select and specify both pickup and destination.");
      return;
    }
    if (!isAuthenticated) {
      alert("Please log in to book a ride.");
      navigate("/login");
      return;
    }

    const rideData = {
      userId: Number(localStorage.getItem("user_id")),
      pickupLocation: pickupText,
      destination: destinationText,
      fare: fare,
    };

    try {
      const response = await fetch("http://localhost:8080/api/rides/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(rideData),
      });

      if (response.ok) {
        const data = await response.json();
        alert(`Ride booked successfully! Fare: ₹${data.fare}`);
      } else {
        const errorData = await response.json();
        alert(`Failed to book ride: ${errorData.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error booking ride:", error);
      alert("An error occurred while booking the ride.");
    }
  };

  return (
    <section className="ride-request">
      <h2>
        <FaRegDotCircle style={{ color: "#2979FF", marginRight: 10 }} />
        Book Your Ride
      </h2>
      <div className="map-instructions">
        <span>
          Click on the map to set <b>Pickup</b>, then click again to set <b>Destination</b>.
        </span>
      </div>
      <MapContainer
        center={[28.6139, 77.2090]}
        zoom={13}
        scrollWheelZoom={false}
        className="ride-map"
      >
        <LocationMarker
          position={pickup}
          setPosition={(latlng) => {
            if (!pickup) setPickup(latlng);
            else if (!destination) setDestination(latlng);
            else {
              setPickup(latlng);
              setDestination(null);
            }
          }}
          label={pickup && !destination ? "Pickup" : destination ? "Destination" : ""}
        />
        {pickup && destination && (
          <Marker position={destination} icon={markerIcon}>
            <div>Destination</div>
          </Marker>
        )}
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>

      <form onSubmit={handleSubmit} className="ride-request-form">
        <div className="input-row">
          <FaMapMarkerAlt className="input-icon" />
          <input
            type="text"
            placeholder="Specify Pickup Location"
            value={pickupText}
            onChange={(e) => setPickupText(e.target.value)}
            required
          />
        </div>
        <div className="input-row">
          <FaMapMarkerAlt className="input-icon" />
          <input
            type="text"
            placeholder="Specify Destination"
            value={destinationText}
            onChange={(e) => setDestinationText(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="grey-btn animated-btn"
          disabled={!isAuthenticated}
          style={{
            opacity: isAuthenticated ? 1 : 0.6,
            cursor: isAuthenticated ? "pointer" : "not-allowed",
          }}
        >
          <FaRegDotCircle style={{ marginRight: 8 }} />
          Book Ride
        </button>
      </form>

      {!isAuthenticated && (
        <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <button
            className="login-btn"
            onClick={() => navigate("/login")}
            style={{
              background: "#2979FF",
              color: "white",
              border: "none",
              padding: "12px 30px",
              borderRadius: "8px",
              fontSize: "1.1rem",
              cursor: "pointer",
              transition: "transform 0.2s, background 0.2s",
            }}
          >
            You need to log in before booking
          </button>
        </div>
      )}

      <div className="location-summary">
        <div>
          <b>Pickup:</b>{" "}
          {pickup ? `${pickup.lat.toFixed(5)}, ${pickup.lng.toFixed(5)}` : "Not set"}
        </div>
        <div>
          <b>Destination:</b>{" "}
          {destination ? `${destination.lat.toFixed(5)}, ${destination.lng.toFixed(5)}` : "Not set"}
        </div>
        <div>
          <b>Estimated Fare:</b>{" "}
          {pickup && destination ? `₹${fare}` : "N/A"}
        </div>
      </div>
    </section>
  );
};

export default RideRequest;
