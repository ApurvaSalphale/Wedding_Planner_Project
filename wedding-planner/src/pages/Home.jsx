import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">

      {/* Fullscreen Hero with Search */}
      <div className="hero-fullscreen">
        <img
          src="/images/wed1.webp"
          alt="Wedding Banner"
          className="fullscreen-img"
        />
        <div className="search-overlay">
          <h1>Plan Your Dream Wedding</h1>
          <div className="search-bar">
            <select className="dropdown">
              <option disabled selected>Select a Service</option>
              <option>Venues</option>
              <option>Photographers</option>
              <option>Planning & Decor</option>
              <option>Mehndi</option>
              <option>Music & Dance</option>
              <option>Food</option>
              <option>Groom Wear</option>
              <option>Bridal Wear</option>
            </select>
            <button className="search-btn">Search</button>
          </div>
        </div>
      </div>

      {/* Popular Venue Searches */}
      <section className="popular-section">
        <h2>Popular Venue Searches</h2>

        <div className="popular-grid">

          {/* Card 1 */}
          <Link to="/venue" className="popular-card">
            <img src="/images/wed2.jpg" alt="4 Star Wedding" />
            <div className="popular-title">4 Star & Above Wedding</div>
          </Link>

          {/* Card 2 */}
          <Link to="/venue" className="popular-card">
            <img src="/images/wed3.jpg" alt="Banquet Halls" />
            <div className="popular-title">Banquet Halls</div>
          </Link>

          {/* Card 3 */}
          <Link to="/venue" className="popular-card">
            <img src="/images/wed4.jpg" alt="Marriage Garden" />
            <div className="popular-title">Marriage Gardens</div>
          </Link>
        </div>
      </section>
    </div>
  );
}
