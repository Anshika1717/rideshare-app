import React, { useState, useEffect } from "react";
import "./EmergencyContact.css";
import { FaPhoneAlt, FaUser, FaEnvelope } from "react-icons/fa";
import axios from "axios";

const EmergencyContact = ({driver = { id: "driver123", name: "John Doe", phone: "+91-9876543210" } }) => {
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    email: ""
  });

  // Fetch existing contact on mount (if driver.id is defined)
  useEffect(() => {
    if (!driver?.id) return;
    axios
      .get(`http://localhost:5000/api/contacts/${driver.id}`)
      .then(res => {
        if (res.data.length > 0) setContact(res.data[0]);
      })
      .catch(err => console.error("Fetch error:", err));
  }, [driver?.id]);

  // Save contact to backend
  const handleSave = (e) => {
    e.preventDefault();
    if (!contact.name || !contact.phone) {
      alert("Please fill in at least name and phone!");
      return;
    }
    if (!driver?.id) {
      alert("Driver information is missing!");
      return;
    }
    axios
      .post("http://localhost:5000/api/contacts", {
        user_id: driver.id,
        ...contact
      })
      .then(() => alert("Contact saved successfully!"))
      .catch(err => alert("Save failed: " + err.message));
  };

  // Input change handler
  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value
    });
  };

  // Emergency button handler
  const handleEmergency = () => {
  if (!contact.name || !contact.phone) {
    alert("Please save an emergency contact first!");
    return;
  }
  alert(
    `Emergency! Driver info sent to your contact:\nName: ${driver?.name || "N/A"}\nPhone: ${driver?.phone || "N/A"}`
  );
};

  return (
    <div className="emergency-contact">
      <h2>Update Emergency Contact</h2>
      <form className="emergency-contact-form" onSubmit={handleSave}>
        <div className="input-row">
          <FaUser className="input-icon" />
          <input
            type="text"
            name="name"
            placeholder="Contact Name"
            value={contact.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-row">
          <FaPhoneAlt className="input-icon" />
          <input
            type="tel"
            name="phone"
            placeholder="Contact Phone"
            value={contact.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-row">
          <FaEnvelope className="input-icon" />
          <input
            type="email"
            name="email"
            placeholder="Contact Email (optional)"
            value={contact.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="grey-btn">
          Save Emergency Contact
        </button>
      </form>
      <button className="emergency-btn" onClick={handleEmergency}>
        <FaPhoneAlt style={{ marginRight: "0.5em" }} />
        Emergency
      </button>
      <p className="emergency-note">
        In case of emergency, your driver details will be sent to your trusted contact.
      </p>
    </div>
  );
};

export default EmergencyContact;
