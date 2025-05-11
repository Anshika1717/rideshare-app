import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Changed from <a> to <Link>
import "./Login.css";

const Login = ({ setIsAuthenticated }) => { // Added prop to update global auth state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      // Store user ID instead of email for consistency with RideRequest
      localStorage.setItem("user_id", "demo_user_123"); // Replace with actual user ID from backend
      localStorage.setItem("isLoggedIn", "true");
      
      // Update global authentication state
      setIsAuthenticated(true);
      
      // Trigger storage event for cross-component sync
      window.dispatchEvent(new Event("storage"));
      
      navigate("/dashboard"); // Redirect to ride request page instead of dashboard
    } else {
      alert("Please enter both email and password.");
    }
  };

  return (
    <section className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
      </form>
      <div style={{ marginTop: "1rem" }}>
        <Link to="/forgot-password" className="forgot-link"> {/* Changed to Link */}
          Forgot Password?
        </Link>
      </div>
      <p style={{ marginTop: "1.5rem" }}>
        Don't have an account? <Link to="/signup">Sign up</Link> {/* Changed to Link */}
      </p>
    </section>
  );
};

export default Login;
