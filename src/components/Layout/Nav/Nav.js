import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { faBars, faXmark, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { pageLinks } from '../../../data';
import { removeStoredClient } from '../../../utils';
import './nav.css';

function Nav({ client, counter }) {
  const { pathname } = useLocation();
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  let filteredLinks;
  if (client) {
    filteredLinks = pageLinks.filter(
      (link) => link.name !== 'sign up' && link.name !== 'login' && link.name !== 'orders'
    );
  } else {
    filteredLinks = pageLinks.filter(
      (link) => link.name !== 'logout' && link.name !== 'profile' && link.name !== 'orders'
    );
  }
  let orderLink = pageLinks.find((link) => link.name === 'orders');
  const navigate = useNavigate();
  const logout = () => {
    removeStoredClient();
    setTimeout(() => {
      navigate('/logout');
      window.location.reload();
    }, 500);
  };

  return (
    <>
      <nav className="nav-bar">
        <Link
          to="/order"
          className={pathname === '/order' ? 'nav-link for-mobile current' : 'nav-link for-mobile'}
          title="orders"
        >
          <FontAwesomeIcon icon={faCartShopping} className="nav-icon" />
          <span className="counter">{counter}</span>
        </Link>
        <button
          className="open-close-btn"
          aria-label="Onclick"
          onClick={() => setIsNavExpanded(!isNavExpanded)}
          title="open"
        >
          <FontAwesomeIcon icon={faBars} size="2x" className="icon" />
        </button>

        <ul
          className={isNavExpanded ? 'list expanded' : 'list'}
          onClick={() => setIsNavExpanded(false)}
        >
          <button
            className="open-close-btn"
            aria-label="Onclick"
            onClick={() => setIsNavExpanded(false)}
            title="close"
          >
            <FontAwesomeIcon icon={faXmark} size="2x" className="icon" />
          </button>
          {filteredLinks.map((page, index) => {
            const { path, name, icon } = page;
            if (path === '/logout') {
              return (
                <li key={index}>
                  <Link
                    to={path}
                    className={pathname === path ? 'nav-link current' : 'nav-link'}
                    onClick={logout}
                    title={name}
                  >
                    <FontAwesomeIcon icon={icon} className="nav-icon" />
                    <span className="link-name">{name}</span>
                  </Link>
                </li>
              );
            } else {
              return (
                <li key={index}>
                  <Link
                    to={path}
                    className={pathname === path ? 'nav-link current' : 'nav-link'}
                    title={name}
                  >
                    <FontAwesomeIcon icon={icon} className="nav-icon" />
                    <span className="link-name">{name}</span>
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      </nav>
      <Link
        to={orderLink.path}
        className={
          pathname === orderLink.path ? 'nav-link order-link current' : 'nav-link order-link'
        }
      >
        <FontAwesomeIcon icon={orderLink.icon} className="nav-icon" />

        <span className="counter">{counter}</span>
      </Link>
    </>
  );
}

export default Nav;
