import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../images/smallLogo.png';
import './footer.css';
import { pageLinks, contactInfo, socialMedia } from '../../data';
function Footer() {
  return (
    <footer className="footer section">
      <div className="content max-width">
        <img className="footer-logo" src={logo} alt="site logo" />
        <nav className="site-map">
          <h3>siteMap</h3>
          <ul>
            {pageLinks.map((page, index) => (
              <li key={index}>
                <Link to={page.path}>{page.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="contact">
          <h3>contact us</h3>
          <ul>
            {contactInfo.map((info, index) => (
              <li key={index}>
                <FontAwesomeIcon icon={info.icon} className="contact-icon" />
                {info.value}
              </li>
            ))}
          </ul>
        </div>
        <nav className="social-media">
          <h3>Connect with us</h3>
          <ul>
            {socialMedia.map((link, index) => (
              <li key={index}>
                <a href={link.value} target="_blank" rel="noreferrer" title={link.name}>
                  <FontAwesomeIcon icon={link.icon} size="lg" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
