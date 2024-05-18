import React from 'react';
import { Link } from 'react-router-dom';
import foodImg from '../../images/restaurantfood.jpg';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__container max-width">
        <div className="hero__info">
          <header className="hero__header">
            <h1 className="hero__title">little lemon</h1>
            <h2 className="hero__sub-title">chicago</h2>
          </header>
          <div className="hero__body">
            <p className="hero__text lead-text">
              We are a family owned Mediterranean restaurant, focused on traditional recipes served
              with a modern twist.
            </p>
            <Link to="/bookings" className="link-btn">
              Reserve a table
            </Link>
          </div>
        </div>
        <img className="hero__img" src={foodImg} alt="food" />
      </div>
    </section>
  );
}

export default HeroSection;
