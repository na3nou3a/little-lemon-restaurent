import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { faBars, faXmark, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { pageLinks } from '../../../data';
import { removeStoredClient } from '../../../utils';
import './nav.css';

function Nav({ client }) {
  const { pathname } = useLocation();
  const [isNavExpanded, setIsNavExpanded] = useState(false);
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
    <nav className="nav-bar">
      <Link
        to="/order"
        className={pathname === '/order' ? 'nav-link for-mobile current' : 'nav-link for-mobile'}
      >
        <FontAwesomeIcon icon={faCartShopping} className="shopping-cart" />
        <span className="counter">0</span>
      </Link>
      <button
        className="nav-bar-hamburger"
        aria-label="Onclick"
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
        {isNavExpanded ? (
          <FontAwesomeIcon icon={faXmark} size="2x" className="icon" />
        ) : (
          <FontAwesomeIcon icon={faBars} size="2x" className="icon" />
        )}
      </button>
      <ul
        className={isNavExpanded ? 'list expanded' : 'list'}
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
        {filteredLinks.map((page, index) => {
          const { path, name } = page;
          if (path === '/order') {
            return (
              <li key={index}>
                <Link
                  to={path}
                  className={
                    pathname === path ? 'nav-link order-link current' : 'nav-link order-link'
                  }
                >
                  {name}
                  <span className="counter">0</span>
                </Link>
              </li>
            );
          } else if (path === '/logout') {
            return (
              <li key={index}>
                <Link
                  to={path}
                  className={pathname === path ? 'nav-link current' : 'nav-link'}
                  onClick={logout}
                >
                  {name}
                </Link>
              </li>
            );
          } else {
            return (
              <li key={index}>
                <Link to={path} className={pathname === path ? 'nav-link current' : 'nav-link'}>
                  {name}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
}

export default Nav;
