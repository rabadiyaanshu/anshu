import React, { useState } from "react";
import "./Navbar.css";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      
      <div className="navbar-logo">MyShop</div>

   
      <div className={`navbar-center ${menuOpen ? "active" : ""}`}>
        <ul className="navbar-links">
          <li><a href="/">Home</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <input type="text" placeholder="Search..." className="navbar-search" />
      </div>

     
      <div className="navbar-icons">
        <FaShoppingCart className="icon" />
        <FaUserCircle className="icon" />

        
        <div
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>
    </nav>
  );
}
