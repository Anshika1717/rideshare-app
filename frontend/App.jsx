import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Layout components
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

// Pages
import Dashboard from "./pages/Dashboard";
import RideRequest from "./pages/RideRequest";
// import MyRides from "./pages/RideList";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import TrackDriver from "./pages/TrackDriver";
import EmergencyContact from "./components/common/EmergencyContact";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import History from "./pages/History";
import Complain from "./pages/Complain";
import Referral from "./pages/Referral";
import AboutUs from "./pages/AboutUs";
import Settings from "./pages/Settings";
import HomePage from "./pages/HomePage";
import ForgotPassword from "./pages/ForgotPassword";
import FAQ from "./pages/FAQ";


// PrivateRoute wrapper
import PrivateRoute from "./components/common/PrivateRoute";

import "./index.css";
import "./App.css";

// Layout component to use hooks inside Router
function Layout({ children, setIsAuthenticated }) {
  return (
    <>
      <Header setIsAuthenticated={setIsAuthenticated} />
      <main className="main-content">{children}</main>
      <Footer />
    </>
  );
}

function App() {
  // Check authentication on load
  
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
  return localStorage.getItem("user_id") !== null;
});



  // Optional: update auth state on storage change (e.g. logout from another tab)
 
  useEffect(() => {
  const handleStorage = () => {
    setIsAuthenticated(localStorage.getItem("user_id") !== null);
  };
  window.addEventListener("storage", handleStorage);
  return () => window.removeEventListener("storage", handleStorage);
}, []);


  const driver = { name: "Alex Rider", phone: "+91-9876543210" };

  return (
    <Router>
      <Layout setIsAuthenticated={setIsAuthenticated}>
        <Routes>
          {/* Home Page as the starting page */}
          <Route path="/" element={<HomePage />} />

          {/* Auth routes */}
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Private Routes */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <Dashboard driver={driver} />
              </PrivateRoute>
            }
          />
          <Route
            path="/request"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <RideRequest driver={driver} />
              </PrivateRoute>
            }
          />
          {/* <Route
            path="/rides"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <MyRides />
              </PrivateRoute>
            }
          /> */}
          <Route path="/faq" element={<FAQ />} />
          <Route
            path="/track-driver"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <TrackDriver />
              </PrivateRoute>
            }
          />
          <Route
            path="/update-contacts"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <EmergencyContact driver={driver} />
              </PrivateRoute>
            }
          />
          <Route
            path="/offers"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <Offers />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/history"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <History />
              </PrivateRoute>
            }
          />
          <Route
            path="/complain"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <Complain />
              </PrivateRoute>
            }
          />
          <Route
            path="/referral"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <Referral />
              </PrivateRoute>
            }
          />
          <Route
            path="/about-us"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <AboutUs />
              </PrivateRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <Settings />
              </PrivateRoute>
            }
          />

          {/* Fallback: 404 or redirect */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
