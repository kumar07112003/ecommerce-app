import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We provide quality products at the best prices with fast delivery
            and secure payment options.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/orders">Orders</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul>
            <li><Link to="/help">Help Center</Link></li>
            <li><Link to="/returns">Returns</Link></li>
            <li><Link to="/shipping">Shipping</Link></li>
            <li><Link to="/payment">Payment Options</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: distack@gmail.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: India</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 E-Com. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
