import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaSignInAlt, FaInfoCircle } from "react-icons/fa";

const aboutImg = "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_1152,w_1152/v1684887108/assets/76/baf1ea-385a-408c-846b-59211086196c/original/u4b-square.png";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="homepage-root">
      <style>{`
        .homepage-root {
          min-height: 100vh;
          background: linear-gradient(120deg, #181c22 70%, #2979ff 100%);
          color: #fff;
          font-family: 'Inter', Arial, sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
        }
        .hero-section {
          width: 100%;
          max-width: 1000px;
          margin: 3rem auto 2rem auto;
          text-align: center;
        }
        .hero-title {
          font-size: 2.7rem;
          font-weight: 800;
          margin-bottom: 1.2rem;
          letter-spacing: 1px;
        }
        .hero-subtitle {
          font-size: 1.25rem;
          color:rgb(162, 179, 187);
          margin-bottom: 2.3rem;
        }
        .hero-btn-row {
          display: flex;
          gap: 1.7rem;
          justify-content: center;
          margin-bottom: 2.7rem;
        }
        .hero-btn {
          background: linear-gradient(90deg, #00E5FF 0%, #2979FF 100%);
          color: #181c22;
          border: none;
          border-radius: 12px;
          padding: 1rem 2.5rem;
          font-size: 1.15rem;
          font-weight: 700;
          box-shadow: 0 2px 12px #2979ff44;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.7rem;
          transition: background 0.2s, color 0.2s, transform 0.1s;
        }
        .hero-btn:hover {
          background: #fff;
          color: #2979FF;
          transform: scale(1.04);
        }
        .about-section {
          background: #232a34;
          border-radius: 22px;
          box-shadow: 0 6px 32px #0007;
          max-width: 600px;
          margin: 0 auto 2.5rem auto;
          padding: 2.2rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .about-img {
          width: 100%;
          max-width: 350px;
          border-radius: 18px;
          box-shadow: 0 2px 12px #2979ff22;
          margin-bottom: 1.2rem;
        }
        .about-title {
          color: #00e5ff;
          font-size: 1.6rem;
          font-weight: 700;
          margin-bottom: 0.7rem;
          display: flex;
          align-items: center;
          gap: 0.7rem;
          justify-content: center;
        }
        .about-text {
          color: #eee;
          font-size: 1.1rem;
          line-height: 1.7;
          text-align: center;
        }
      `}</style>
      <div className="hero-section">
        <div className="hero-title">Welcome to Rideshare</div>
        <div className="hero-subtitle">
          Your journey begins here. Book safe, affordable rides anytime, anywhere.
        </div>
        <div className="hero-btn-row">
          <button className="hero-btn" onClick={() => navigate("/login")}>
            <FaSignInAlt /> Login
          </button>
          <button className="hero-btn" onClick={() => navigate("/signup")}>
            <FaUserCircle /> Sign Up
          </button>
        </div>
      </div>

      <div className="about-section">
        <img src={aboutImg} alt="About Rideshare" className="about-img" />
        <div className="about-title">
          <FaInfoCircle /> About Us
        </div>
        <div className="about-text">
          <b>Rideshare</b> is dedicated to connecting people with safe, reliable, and affordable rides. Our mission is to empower communities through seamless mobility, innovative technology, and a commitment to equality and safety for all. Join us and experience the joy of smarter travel!
        </div>
      </div>
    </div>
  );
}

export default HomePage;
