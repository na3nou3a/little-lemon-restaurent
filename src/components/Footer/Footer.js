import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/smallLogo.png';
import './styles.css';
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content max-width grid">
        <div className="logo-container">
          <img src={logo} alt="site logo" />
        </div>
        <nav className="site-map">
          <h4>doormat navigation</h4>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/menu">menu</Link>
            </li>
            <li>
              <Link to="/bookings">reservations</Link>
            </li>
            <li>
              <Link to="/order">order online</Link>
            </li>
            <li>
              <Link to="/login">login</Link>
            </li>
          </ul>
        </nav>
        <div className="contact">
          <h4>contact</h4>
          <ul>
            <li>23 Citrus Lane</li>
            <li>123-456-7890</li>
            <li>little.lemon@lemon.com</li>
          </ul>
        </div>
        <nav className="social-media">
          <h4>social media links</h4>
          <ul>
            <li>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                instagram
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                twitter
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
