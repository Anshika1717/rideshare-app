import React from "react";
import { FaInfoCircle } from "react-icons/fa";

const aboutImg = "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_419,w_744/v1535753709/assets/ec/8183dc-ffee-468a-9ee8-175bd1fb1f55/original/D_Fleet_22x.png";

function AboutUs() {
  return (
    <div className="page-dark">
      <style>{`
        .about-container {
          max-width: 800px;
          margin: 2.5rem auto;
          background: #181818;
          border-radius: 22px;
          box-shadow: 0 6px 32px #0007;
          padding: 2.2rem 2rem;
        }
        .about-img {
          width: 100%;
          max-width: 500px;
          border-radius: 14px;
          margin-bottom: 1.2rem;
          box-shadow: 0 2px 12px #2979ff22;
          display: block;
          margin-left: auto;
          margin-right: auto;
        }
        .about-title {
          color: #fff;
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1.2rem;
          display: flex;
          align-items: center;
          gap: 0.7rem;
          justify-content: center;
        }
        .about-text {
          color: #eee;
          font-size: 1.13rem;
          line-height: 1.7;
          text-align: center;
        }
      `}</style>
      <div className="about-container">
        <img src={aboutImg} alt="About Us" className="about-img" />
        <div className="about-title">
          <FaInfoCircle /> About Us
        </div>
        <div className="about-text">
          Rideshare is on a mission to connect people with safe, affordable, and reliable rides-anytime, anywhere. Our community is built on trust, equality, and innovation. Thank you for being part of our journey!
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
