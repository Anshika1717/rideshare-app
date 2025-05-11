import React, { useState } from "react";
import { FaComments, FaPaperPlane } from "react-icons/fa";

const complainImg = "https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&w=800&h=440&fit=crop";

function Complain() {
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setMessage("");
    setTimeout(() => setSent(false), 2500);
  };

  return (
    <div className="page-dark">
      <style>{`
        .complain-container {
          max-width: 600px;
          margin: 2.5rem auto;
          background: #181818;
          border-radius: 22px;
          box-shadow: 0 6px 32px #0007;
          padding: 2.2rem 2rem;
          text-align: center;
        }
        .complain-img {
          width: 100%;
          max-width: 400px;
          border-radius: 14px;
          margin-bottom: 1.2rem;
          box-shadow: 0 2px 12px #2979ff22;
        }
        .complain-title {
          color: #fff;
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1.2rem;
          display: flex;
          align-items: center;
          gap: 0.7rem;
          justify-content: center;
        }
        .complain-form textarea {
          width: 100%;
          min-height: 90px;
          border-radius: 10px;
          border: 2px solid #2979FF;
          padding: 0.9rem;
          font-size: 1.07rem;
          background: #222;
          color: #fff;
          margin-bottom: 1rem;
          resize: vertical;
        }
        .complain-btn {
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
        }
        .complain-btn:hover {
          background: #fff;
          color: #2979FF;
          transform: scale(1.04);
        }
        .complain-success {
          color: #00E5FF;
          margin-top: 1rem;
          font-weight: 600;
        }
      `}</style>
      <div className="complain-container">
        <img src={complainImg} alt="Complain" className="complain-img" />
        <div className="complain-title">
          <FaComments /> Submit a Complaint
        </div>
        <form className="complain-form" onSubmit={handleSubmit}>
          <textarea
            placeholder="Describe your issue or feedback..."
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
          />
          <button className="complain-btn" type="submit">
            <FaPaperPlane /> Send
          </button>
        </form>
        {sent && <div className="complain-success">Thank you for your feedback!</div>}
      </div>
    </div>
  );
}

export default Complain;
