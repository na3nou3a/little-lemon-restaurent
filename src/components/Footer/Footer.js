import React from 'react';
import logo from '../../images/smallLogo.png';
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo-container">
          <img src={logo} className="logo" alt="site logo" />
        </div>
        <nav className="nav site-map">
          <h4>doormat navigation</h4>
          <ul>
            <li>
              <a href="/">home</a>
            </li>
            <li>
              <a href="/about">about</a>
            </li>
            <li>
              <a href="/menu">menu</a>
            </li>
            <li>
              <a href="/bookings">reservations</a>
            </li>
            <li>
              <a href="/order">order online</a>
            </li>
            <li>
              <a href="/login">login</a>
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
        <nav className="nav social-media">
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
