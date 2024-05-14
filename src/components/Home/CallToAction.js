import React from 'react';
import { Link } from 'react-router-dom';
import foodImg from '../../images/restaurantfood.jpg';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content max-width">
        <div className="hero-info">
          <header className="hero-header">
            <h1 className="hero-title">little lemon</h1>
            <h2 className="hero-sub-title">chicago</h2>
          </header>
          <p className="hero-text lead-text">
            We are a family owned Mediterranean restaurant, focused on traditional recipes served
            with a modern twist.
          </p>
          <Link to="/bookings" className="link-btn">
            Reserve a table
          </Link>
        </div>
        <img className="hero-img" src={foodImg} alt="food" />
      </div>
    </section>
  );
}

export default HeroSection;
