import React from "react";
import { FaShareAlt, FaUserFriends } from "react-icons/fa";

const referralImg = "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&w=800&h=440&fit=crop";

function Referral() {
  const handleShare = () => {
    navigator.clipboard.writeText("RIDESHARE-REF1234");
    alert("Referral code copied!");
  };

  return (
    <div className="page-dark">
      <style>{`
        .referral-container {
          max-width: 700px;
          margin: 2.5rem auto;
          background: #181818;
          border-radius: 22px;
          box-shadow: 0 6px 32px #0007;
          padding: 2.2rem 2rem;
          text-align: center;
        }
        .referral-img {
          width: 100%;
          max-width: 400px;
          border-radius: 14px;
          margin-bottom: 1.2rem;
          box-shadow: 0 2px 12px #2979ff22;
        }
        .referral-title {
          color: #fff;
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1.2rem;
          display: flex;
          align-items: center;
          gap: 0.7rem;
          justify-content: center;
        }
        .referral-code {
          background: #222;
          color: #00E5FF;
          font-size: 1.22rem;
          font-weight: 700;
          padding: 0.7rem 1.3rem;
          border-radius: 10px;
          margin: 1.2rem auto;
          display: inline-block;
          letter-spacing: 2px;
        }
        .referral-btn {
          background: linear-gradient(90deg, #00E5FF 0%, #2979FF 100%);
          color: #181818;
          font-weight: 700;
          font-size: 1.1rem;
          border: none;
          border-radius: 10px;
          padding: 0.7rem 1.6rem;
          box-shadow: 0 2px 12px #2979ff44;
          cursor: pointer;
          transition: background 0.2s, color 0.2s, transform 0.1s;
          display: flex;
          align-items: center;
          gap: 0.7rem;
          margin-bottom: 1rem;
        }
        .referral-btn:hover {
          background: #fff;
          color: #2979FF;
          transform: scale(1.04);
        }
      `}</style>
      <div className="referral-container">
        <img src={referralImg} alt="Referral" className="referral-img" />
        <div className="referral-title">
          <FaUserFriends /> Refer &amp; Earn
        </div>
        <div>
          Share your code and get free rides when friends join!
        </div>
        <div className="referral-code">RIDESHARE-REF1234</div>
        <button className="referral-btn" onClick={handleShare}>
          <FaShareAlt /> Copy Referral Code
        </button>
      </div>
    </div>
  );
}

export default Referral;
