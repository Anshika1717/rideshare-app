import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const driver = { name: "Alex Rider", phone: "+91-9876543210" };

// List of ride images
const rideImages = [
  {
    url: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_768,w_1024/v1535744030/assets/7e/4c2f7e-da89-4c1e-a8cf-1b56172c6e5b/original/D_Fleet2x.png",
    caption: "City Rides"
  },
  {
    url: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_768,w_1024/v1535753709/assets/ec/8183dc-ffee-468a-9ee8-175bd1fb1f55/original/D_Fleet_22x.png",
    caption: "Airport Drop"
  },
  {
    url: "https://th.bing.com/th/id/OIP.BKBjazTmtx_7Y9HAzw56JgHaEx?rs=1&pid=ImgDetMain",
    caption: "Outstation"
  },
  {
    url: "https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg?auto=compress&w=800&h=440&fit=crop",
    caption: "Luxury Ride"
  },
  {
    url: "https://th.bing.com/th/id/OIP.7ZiYFTFyeMGXHfQwfynHVQHaEL?rs=1&pid=ImgDetMain",
    caption: "Family Trip"
  }
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [showWhy, setShowWhy] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  // Auto-advance the gallery every 3 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setGalleryIndex(idx => (idx + 1) % rideImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleEmergencyAlert = () => {
    alert(`Emergency! Driver info sent to your contact:\nName: ${driver.name}\nPhone: ${driver.phone}`);
  };

  return (
    <section className="dashboard">
      {/* Top row: Three small, spread-out action cards */}
      <div className="dashboard-cards-spread">
        <div className="mini-card card-gradient-1">
          <h3>Book a Ride</h3>
          <button className="grey-btn" onClick={() => navigate("/request")}>
            Book a Ride
          </button>
        </div>
        <div className="mini-card card-gradient-2">
          <h3>Driver Tracking</h3>
          <button className="grey-btn" onClick={() => navigate("/track-driver")}>
            Track Driver
          </button>
        </div>
        <div className="emergency-with-image">
          <div className="mini-card card-gradient-3">
            <h3>Emergency</h3>
            <button className="red-btn" onClick={handleEmergencyAlert}>
              Send Emergency Alert
            </button>
            <button 
              className="grey-btn" 
              onClick={() => navigate("/update-contacts")}
            >
              Update Emergency Contacts
            </button>
          </div>
        </div>
      </div>

      {/* --- Dynamic Slideshow --- */}
      <div className="gallery-section">
        <h1 className="gallery-title"> Explore Our Rides  </h1>
        <div className="slideshow-container">
          <img
            src={rideImages[galleryIndex].url}
            alt={rideImages[galleryIndex].caption}
            className="slideshow-image"
          />
          <div className="slideshow-caption">{rideImages[galleryIndex].caption}</div>
          <div className="slideshow-indicators">
            {rideImages.map((_, idx) => (
              <span
                key={idx}
                className={`indicator ${idx === galleryIndex ? "active" : ""}`}
                onClick={() => setGalleryIndex(idx)}
              ></span>
            ))}
          </div>
        </div>
      </div>

      {/* Article Section */}
      <div className="why-article-section">
        <h1 className="article-title">Use Rideshare for Spreading Happiness!</h1>
        <div className="why-choose-us-center">
          {!showWhy && (
            <button className="why-btn" onClick={() => setShowWhy(true)}>
               Why Choose Us? 
            </button>
          )}
          {showWhy && (
            <div className="why-choose-us-popup">
              <button className="close-btn" onClick={() => setShowWhy(false)}>×</button>
              <h3>Why Choose Us?</h3>
              <ul>
                <li>✔️ <b>Fast & Reliable:</b> Get a ride in minutes, 24/7.</li>
                <li>✔️ <b>Multiple Ride Options:</b> Bike, Car, or Auto-your choice.</li>
                <li>✔️ <b>Real-time Tracking:</b> See your driver’s live location.</li>
                <li>✔️ <b>Safety First:</b> Emergency contact and driver verification.</li>
                <li>✔️ <b>Affordable Pricing:</b> Transparent, competitive fares.</li>
              </ul>
            </div>
          )}
        </div>
        <div className="article-content-vertical">
          <div className="article-person">
            <img
              src="https://img.freepik.com/premium-vector/vector-image-people-riding-car-happily_1310403-4366.jpg?w=2000"
              alt="Happy rideshare driver"
              className="article-img"
            />
            <div className="article-caption">
              <strong>Hi, I'm Priya!</strong>
              <p>
                Being a Rideshare driver has been a joyful journey. The app makes everything seamless-from quick payments to easy navigation. I love how I can focus on making my passengers smile, while the technology takes care of the rest!
              </p>
              <span className="review-highlight">
                “Receiving payments is instant, and the support for women drivers like me is fantastic!”
              </span>
            </div>
          </div>
          <div className="article-person">
            <img
              src="https://img.freepik.com/premium-vector/young-woman-cartoon_24640-55937.jpg?w=2000"
              alt="Happy rideshare passenger"
              className="article-img"
            />
            <div className="article-caption">
              <strong>Hi, I'm Aisha!</strong>
              <p>
                Rideshare has made my daily commute stress-free. I always feel safe, the drivers are respectful, and the app is so easy to use-even payments are just a tap away!
              </p>
              <span className="review-highlight">
                “As a woman, I appreciate that Rideshare puts equality and safety above everything.”
              </span>
            </div>
          </div>
        </div>
        <div className="article-footer">
          <p>
            At <b>Rideshare</b>, we believe happiness is a journey shared. We are committed to <b>equality</b> and <b>safety</b> for all-every ride, every time. Join us in spreading smiles on the road!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
