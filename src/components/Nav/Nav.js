import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { pageLinks } from '../../data';
import './nav.css';

function Nav() {
  const { pathname } = useLocation();
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <nav className="nav-bar">
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
        {pageLinks.map((page, index) => (
          <li key={index}>
            <Link
              to={page.path}
              className={pathname === page.path ? 'nav-link current' : 'nav-link'}
            >
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
