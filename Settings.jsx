import React, { useState } from "react";
import { FaCog, FaMoon, FaSun } from "react-icons/fa";

const settingsImg = "https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg?auto=compress&w=800&h=440&fit=crop";

function Settings() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div style={{ background: "#111", color: "#fff", minHeight: "100vh", padding: "2.5rem 1rem" }}>
      <div style={{
        maxWidth: 700,
        margin: "2.5rem auto",
        background: "#181818",
        borderRadius: 22,
        boxShadow: "0 6px 32px #0007",
        padding: "2.2rem 2rem"
      }}>
        <img src={settingsImg} alt="Settings" style={{
          width: "100%",
          maxWidth: 400,
          borderRadius: 14,
          marginBottom: "1.2rem",
          boxShadow: "0 2px 12px #2979ff22",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto"
        }} />
        <div style={{
          color: "#fff",
          fontSize: "2rem",
          fontWeight: 700,
          marginBottom: "1.2rem",
          display: "flex",
          alignItems: "center",
          gap: "0.7rem",
          justifyContent: "center"
        }}>
          <FaCog /> Settings
        </div>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#222",
          color: "#eee",
          borderRadius: 10,
          padding: "1rem 1.2rem",
          marginBottom: "1.1rem",
          fontSize: "1.1rem"
        }}>
          Dark Mode
          <button style={{
            background: "#444",
            color: "#fff",
            border: "none",
            borderRadius: 10,
            padding: "0.5rem 1.2rem",
            fontSize: "1.1rem",
            fontWeight: 600,
            cursor: "pointer",
            transition: "background 0.2s, color 0.2s, transform 0.1s",
            display: "flex",
            alignItems: "center",
            gap: "0.6rem"
          }} onClick={() => setDarkMode((d) => !d)}>
            {darkMode ? <FaMoon /> : <FaSun />}
            {darkMode ? "On" : "Off"}
          </button>
        </div>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#222",
          color: "#eee",
          borderRadius: 10,
          padding: "1rem 1.2rem",
          marginBottom: "1.1rem",
          fontSize: "1.1rem"
        }}>
          Notifications
          <button style={{
            background: "#444",
            color: "#fff",
            border: "none",
            borderRadius: 10,
            padding: "0.5rem 1.2rem",
            fontSize: "1.1rem",
            fontWeight: 600,
            cursor: "pointer",
            transition: "background 0.2s, color 0.2s, transform 0.1s"
          }}>Manage</button>
        </div>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#222",
          color: "#eee",
          borderRadius: 10,
          padding: "1rem 1.2rem",
          marginBottom: "1.1rem",
          fontSize: "1.1rem"
        }}>
          Privacy
          <button style={{
            background: "#444",
            color: "#fff",
            border: "none",
            borderRadius: 10,
            padding: "0.5rem 1.2rem",
            fontSize: "1.1rem",
            fontWeight: 600,
            cursor: "pointer",
            transition: "background 0.2s, color 0.2s, transform 0.1s"
          }}>View</button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
