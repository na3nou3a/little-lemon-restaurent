import React from 'react';
import { Link } from 'react-router-dom';
import foodImg from '../../images/restaurantfood.jpg';
import './styles.css';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="content max-width">
        <div className="info">
          <h1 className="title">little lemon</h1>
          <h2 className="sub-title">chicago</h2>
          <p className="text">
            We are a family owned Mediterranean restaurant, focused on traditional recipes served
            with a modern twist.
          </p>
          <Link to="/bookings" className="link-btn">
            Reserve a table
          </Link>
        </div>
        <img className="img" src={foodImg} alt="food" />
      </div>
    </section>
  );
}

export default HeroSection;
