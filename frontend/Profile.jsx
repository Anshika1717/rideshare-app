import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaEdit, FaEnvelope, FaPhone } from "react-icons/fa";

const profileImg = "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&w=600&h=600&fit=crop";

function Profile() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="page-dark">
      <style>{`
        .profile-card {
          background: #181818;
          border-radius: 22px;
          box-shadow: 0 6px 32px #0007;
          max-width: 430px;
          margin: 2.5rem auto;
          padding: 2.2rem 2rem 2rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .profile-img {
          width: 110px;
          height: 110px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #2979FF;
          margin-bottom: 1.2rem;
        }
        .profile-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.4rem;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .profile-info {
          color: #eee;
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
        }
        .profile-info-row {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          margin-bottom: 0.5rem;
        }
        .edit-btn {
          background: #222;
          color: #fff;
          border: none;
          border-radius: 10px;
          padding: 0.7rem 1.5rem;
          font-size: 1rem;
          font-weight: 600;
          box-shadow: 0 2px 8px #2979ff22;
          cursor: pointer;
          transition: background 0.2s, color 0.2s, transform 0.1s;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .edit-btn:hover {
          background: #2979FF;
          color: #fff;
          transform: scale(1.05);
        }
      `}</style>
      <div className="profile-card">
        <img src={profileImg} alt="Profile" className="profile-img" />
        <div className="profile-title">
          <FaUserCircle /> Anshika Kumari
        </div>
        <div className="profile-info">
          <div className="profile-info-row"><FaEnvelope /> anshika@example.com</div>
          <div className="profile-info-row"><FaPhone /> +91-9876543210</div>
        </div>
        <button className="edit-btn">
          <FaEdit /> Edit Profile
        </button>
      </div>
    </div>
  );
}

export default Profile;
