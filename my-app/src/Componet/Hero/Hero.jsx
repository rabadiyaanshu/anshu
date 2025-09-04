import React from "react";
import { FaStar } from "react-icons/fa"; 
import hero_img from "../Asset/men.webp";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
       
        <div className="hero-left">
          <div className="hero-stars">
            <FaStar className="star" />
            <FaStar className="star" />
          </div>

          <h1 className="hero-title">
            FIND CLOTHES <br />
            THAT MATCH <br />
            YOUR STYLE
          </h1>

          <p className="hero-subtitle">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of style.
          </p>

          <button className="hero-button">Shop Now</button>

          <div className="hero-stats">
            <div>
              <h2>200+</h2>
              <p>International Brands</p>
            </div>
            <div>
              <h2>2000+</h2>
              <p>High-Quality Products</p>
            </div>
            <div className="full-row">
              <h2>30,000+</h2>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <img
            src={hero_img} 
            alt="Hero"
            className="hero-img"
          />
        </div>
      </div>
    </section>
  );
}
