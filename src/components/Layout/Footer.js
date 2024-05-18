import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../images/smallLogo.png';
import { pageLinks, contactInfo, socialMedia } from '../../data';
import { removeStoredClient } from '../../utils';

function Footer({ client }) {
  const year = new Date().getFullYear();
  let filteredLinks;
  if (client) {
    filteredLinks = pageLinks.filter((link) => link.name !== 'sign up' && link.name !== 'login');
  } else {
    filteredLinks = pageLinks.filter((link) => link.name !== 'logout' && link.name !== 'profile');
  }
  const navigate = useNavigate();
  const logout = () => {
    removeStoredClient();
    setTimeout(() => {
      navigate('/logout');
      window.location.reload();
    }, 500);
  };
  return (
    <footer className="footer">
      <div className="footer__container max-width">
        <div className="footer__logo-container item">
          <img className="footer__logo" src={logo} alt="site logo" />
        </div>
        <nav className="site-map item">
          <h3 className="category-title">siteMap</h3>
          <ul>
            {filteredLinks.map((page, index) => {
              const { path, name } = page;
              if (path === '/logout') {
                return (
                  <li key={index}>
                    <Link to={path} onClick={logout}>
                      {name}
                    </Link>
                  </li>
                );
              } else if (path === '/order') {
                return (
                  <li key={index}>
                    <Link to={path}>orders</Link>
                  </li>
                );
              } else {
                return (
                  <li key={index}>
                    <Link to={path}>{name}</Link>
                  </li>
                );
              }
            })}
          </ul>
        </nav>
        <div className="contact item">
          <h3 className="category-title">contact us</h3>
          <ul>
            {contactInfo.map((info, index) => (
              <li key={index}>
                <FontAwesomeIcon icon={info.icon} className="contact__icon" />
                {info.value}
              </li>
            ))}
          </ul>
        </div>
        <nav className="social-media item">
          <h3 className="category-title">find us on</h3>
          <ul>
            {socialMedia.map((link, index) => (
              <li key={index}>
                <a href={link.value} target="_blank" rel="noreferrer" title={link.name}>
                  <FontAwesomeIcon icon={link.icon} title={link.name} size="lg" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="copyright item">
          <p className="copyright__text">© {year} Little Lemon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
