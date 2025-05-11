import React from "react";
import { FaGift, FaBolt } from "react-icons/fa";

const offersImg = "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_440,w_780/v1535744030/assets/7e/4c2f7e-da89-4c1e-a8cf-1b56172c6e5b/original/D_Fleet2x.png";

function Offers() {
  return (
    <div className="page-light">
      <style>{`
        .page-light {
          background: #fff;
          color: #111;
          min-height: 100vh;
          padding: 2.5rem 1rem;
          font-family: 'Inter', Arial, sans-serif;
        }
        .offers-hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          max-width: 800px;
          margin: 0 auto;
        }
        .offers-img {
          width: 100%;
          max-width: 600px;
          border-radius: 18px;
          box-shadow: 0 6px 32px #0002;
          margin-bottom: 1.5rem;
        }
        .offers-title {
          font-size: 2.2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.7rem;
          color: #2979FF;
          animation: fadeInDown 0.6s;
        }
        .offers-list {
          margin: 1.5rem 0 0 0;
          width: 100%;
          max-width: 600px;
        }
        .offer-item {
          background: #f4f7fa;
          border-radius: 12px;
          margin-bottom: 1.2rem;
          padding: 1.1rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 1.1rem;
          color: #222;
          box-shadow: 0 2px 12px #2979ff13;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.8s forwards;
        }
        .offer-item:nth-child(1) { animation-delay: 0.1s; }
        .offer-item:nth-child(2) { animation-delay: 0.25s; }
        .offer-item:nth-child(3) { animation-delay: 0.4s; }
        .offer-item:last-child {
          margin-bottom: 0;
        }
        .offers-btn {
          background: linear-gradient(90deg, #00E5FF 0%, #2979FF 100%);
          color: #fff;
          font-weight: 700;
          font-size: 1.15rem;
          border: none;
          border-radius: 12px;
          padding: 0.8rem 2.2rem;
          margin-top: 1.2rem;
          box-shadow: 0 2px 12px #2979ff44;
          cursor: pointer;
          transition: background 0.2s, color 0.2s, transform 0.1s;
        }
        .offers-btn:hover {
          background: #2979FF;
          color: #fff;
          transform: scale(1.04);
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px);}
          to { opacity: 1; transform: none;}
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px);}
          to { opacity: 1; transform: none;}
        }
      `}</style>
      <div className="offers-hero">
        <img src={offersImg} alt="Offers" className="offers-img" />
        <div className="offers-title">
          <FaGift size={32} /> Exclusive Offers
        </div>
        <p style={{fontSize: "1.13rem", color: "#333"}}>
          Grab the latest deals and discounts for your next ride. Enjoy safe, affordable, and comfortable journeys with Rideshare!
        </p>
        <div className="offers-list">
          <div className="offer-item"><FaBolt color="#2979FF" /> 20% off on your first 3 rides!</div>
          <div className="offer-item"><FaBolt color="#2979FF" /> Refer a friend and both get ₹100 ride credits!</div>
          <div className="offer-item"><FaBolt color="#2979FF" /> Flat ₹50 off on Airport rides this week.</div>
        </div>
        <button className="offers-btn">View All Offers</button>
      </div>
    </div>
  );
}

export default Offers;
