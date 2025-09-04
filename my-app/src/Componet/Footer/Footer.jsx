import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
       
        <div className="footer-left">
          <h2 className="logo">SHOP.CO</h2>
          <p className="desc">
            Your one-stop shop for premium products and the latest collections.
          </p>
        </div>

        
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Help</h3>
          <ul>
            <li>FAQs</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>Order Status</li>
          </ul>
        </div>

        
        <div className="footer-right">
          <h3>Newsletter</h3>
          <p>Subscribe to get updates about new arrivals and offers.</p>
          <form className="subscribe-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
      </div>

      
      <div className="footer-bottom">
        <p>© 2025 ShopLogo. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
