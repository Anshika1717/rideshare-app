// src/pages/ForgotPassword.jsx
import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, send a password reset email here
    setSent(true);
  };

  return (
    <section className="forgot-password">
      <h2>Forgot Password</h2>
      {!sent ? (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <button type="submit">Send Reset Link</button>
        </form>
      ) : (
        <p style={{ color: "#2979FF" }}>
          If an account exists for {email}, a reset link has been sent!
        </p>
      )}
    </section>
  );
};

export default ForgotPassword;
