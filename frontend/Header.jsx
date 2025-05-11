import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FaBars, FaUserCircle, FaGift, FaHistory, FaCog, FaInfoCircle,
  FaComments, FaShareAlt, FaListUl, FaHome, FaMapMarkerAlt, FaUser
} from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();
  const navigate = useNavigate();

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

  // Sign out handler
  const handleSignOut = () => {
    localStorage.removeItem("user_id");
    localStorage.removeItem("isLoggedIn");
    setDropdownOpen(false);
    navigate("/login");
    window.location.reload(); // Optional: to clear all state
  };

  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="logo">RIDESHARE</Link>
        <NavLink to="/dashboard" end className="header-link">
          <FaHome style={{ marginRight: 5 }} />
          Dashboard
        </NavLink>
        <NavLink to="/faq" className="header-link">
          FAQ
        </NavLink>
        <NavLink to="/request" className="header-link">
          <FaMapMarkerAlt style={{ marginRight: 5 }} />
          Request Ride
        </NavLink>
        <NavLink to="/login" className="header-link">
          <FaUser style={{ marginRight: 5 }} />
          Login
        </NavLink>
        <NavLink to="/offers" className="header-link">
          <FaGift style={{ marginRight: 5 }} />
          Offer
        </NavLink>
        <NavLink to="/profile" className="header-link">
          <FaUserCircle style={{ marginRight: 5 }} />
          Profile
        </NavLink>
      </div>
      <div className="header-right" ref={dropdownRef}>
        <button className="dropdown-toggle" onClick={() => setDropdownOpen((open) => !open)} aria-label="More menu">
          <FaBars size={22} />
        </button>
        {dropdownOpen && (
          <div className="dropdown-menu">
            <Link to="/history" className="dropdown-item" onClick={() => setDropdownOpen(false)}>
              <FaHistory style={{ marginRight: 8 }} />
              History
            </Link>
            <Link to="/complain" className="dropdown-item" onClick={() => setDropdownOpen(false)}>
              <FaComments style={{ marginRight: 8 }} />
              Complain
            </Link>
            <Link to="/referral" className="dropdown-item" onClick={() => setDropdownOpen(false)}>
              <FaShareAlt style={{ marginRight: 8 }} />
              Referral
            </Link>
            <Link to="/about-us" className="dropdown-item" onClick={() => setDropdownOpen(false)}>
              <FaInfoCircle style={{ marginRight: 8 }} />
              About Us
            </Link>
            <Link to="/settings" className="dropdown-item" onClick={() => setDropdownOpen(false)}>
              <FaCog style={{ marginRight: 8 }} />
              Settings
            </Link>
            <Link to="/login" className="dropdown-item" onClick={() => setDropdownOpen(false)}>
              <FaUser style={{ marginRight: 8 }} />
              Sign In
            </Link>
            <button
              className="dropdown-item"
              style={{ color: "#ff1744", fontWeight: "bold", border: "none", background: "none", cursor: "pointer" }}
              onClick={handleSignOut}
            >
              <FaUser style={{ marginRight: 8 }} />
              Sign Out
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
