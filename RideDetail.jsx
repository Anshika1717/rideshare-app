import React from "react";
import { useParams } from "react-router-dom";
import "./RideDetail.css";

// Dummy data for illustration
const ride = {
  id: 1,
  pickup: "Central Park",
  destination: "Times Square",
  status: "Completed",
  driver: "Alex Rider",
  date: "2025-05-09 14:30"
};

const RideDetail = () => {
  const { id } = useParams();
  // TODO: Fetch ride detail by id

  return (
    <section className="ride-detail">
      <h2>Ride Details</h2>
      <div className="detail-card">
        <p><b>Pickup:</b> {ride.pickup}</p>
        <p><b>Destination:</b> {ride.destination}</p>
        <p><b>Status:</b> <span className={`status ${ride.status.toLowerCase()}`}>{ride.status}</span></p>
        <p><b>Driver:</b> {ride.driver}</p>
        <p><b>Date:</b> {ride.date}</p>
      </div>
    </section>
  );
};

export default RideDetail;
