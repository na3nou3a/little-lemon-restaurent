import React from 'react';
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
          <a href="/booking" className="link-btn">
            Reserve a table
          </a>
        </div>
        <img className="img" src={foodImg} alt="food" />
      </div>
    </section>
  );
}

export default HeroSection;
