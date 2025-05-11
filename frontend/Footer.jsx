import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="uber-footer">
    <div className="footer-top">
      <a href="#" className="footer-logo">Rideshare</a>
      <a href="#" className="footer-help-link">Visit Help Center</a>
    </div>
    <div className="footer-columns">
      <div className="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="#">About us</a></li>
          <li><a href="#">Our offerings</a></li>
          <li><a href="#">Newsroom</a></li>
          <li><a href="#">Investors</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Careers</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Products</h4>
        <ul>
          <li><a href="#">Ride</a></li>
          <li><a href="#">Drive</a></li>
          <li><a href="#">Eat</a></li>
          <li><a href="#">RIDESHARE for Business</a></li>
          <li><a href="#">RIDESHARE Freight</a></li>
          <li><a href="#">Gift cards</a></li>
          <li><a href="#">RIDE Health</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Global citizenship</h4>
        <ul>
          <li><a href="#">Safety</a></li>
          <li><a href="#">Sustainability</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Travel</h4>
        <ul>
          <li><a href="#">Reserve</a></li>
          <li><a href="#">Airports</a></li>
          <li><a href="#">Cities</a></li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <span>&copy; {new Date().getFullYear()} Rideshare</span>
    </div>
  </footer>
);

export default Footer;
