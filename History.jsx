import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHistory, FaCarSide } from "react-icons/fa";

const historyImg = "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_1152,w_1152/v1684855112/assets/96/4dd3d1-94e7-481e-b28c-08d59353b9e0/original/earner-illustra.png";

function History() {
  const navigate = useNavigate();
  const [rides, setRides] = useState([]);

  useEffect(() => {
    // Check login
    const userId = localStorage.getItem("user_id");
    if (!userId) {
      navigate("/login", { replace: true });
      return;
    }

    // Fetch ride history
    fetch(`http://localhost:8080/api/rides/history/${userId}`)
      .then(res => res.json())
      .then(data => {
        setRides(Array.isArray(data) ? data : []);
      })
      .catch(err => {
        console.error("Error fetching ride history:", err);
        setRides([]);
      });
  }, [navigate]);

  return (
    <div className="page-dark">
      <style>{`
        .history-container {
          max-width: 900px;
          margin: 2.5rem auto;
          background: #181818;
          border-radius: 22px;
          box-shadow: 0 6px 32px #0007;
          padding: 2.2rem 2rem;
        }
        .history-img {
          width: 100%;
          max-width: 600px;
          border-radius: 16px;
          margin-bottom: 1.2rem;
          box-shadow: 0 2px 12px #2979ff22;
        }
        .history-title {
          color: #fff;
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1.2rem;
          display: flex;
          align-items: center;
          gap: 0.7rem;
        }
        .history-list {
          margin-top: 1.5rem;
        }
        .history-item {
          background: #222;
          border-radius: 10px;
          padding: 1rem 1.2rem;
          color: #eee;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          box-shadow: 0 1px 6px #2979ff11;
        }
        .history-item:last-child {
          margin-bottom: 0;
        }
      `}</style>
      <div className="history-container">
        <img src={historyImg} alt="Ride history" className="history-img" />
        <div className="history-title">
          <FaHistory /> Ride History
        </div>
        <div className="history-list">
          {rides.length > 0 ? (
            rides.map((ride, idx) => (
              <div key={idx} className="history-item">
                <FaCarSide />{" "}
                {ride.timestamp
                  ? new Date(ride.timestamp).toLocaleString()
                  : "Unknown time"}
                {" - "}
                {ride.pickupLocation} to {ride.destination} - ₹{ride.fare}
              </div>
            ))
          ) : (
            <div className="history-item">No ride history found.</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default History;
