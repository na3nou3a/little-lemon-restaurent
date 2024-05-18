import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { pageLinks } from '../../data';
import { removeStoredClient } from '../../utils';

function Navbar({ client, isNavExpanded, setIsNavExpanded }) {
  const { pathname } = useLocation();
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
  const navigate = useNavigate();
  const logout = () => {
    removeStoredClient();
    setTimeout(() => {
      navigate('/logout');
      window.location.reload();
    }, 500);
  };

  return (
    <nav
      className={isNavExpanded ? 'navbar navbar--expanded' : 'navbar'}
      onClick={() => setIsNavExpanded(false)}
    >
      <button
        className="close-btn"
        aria-label="close menu"
        onClick={() => setIsNavExpanded(false)}
        title="close"
      >
        <FontAwesomeIcon icon={faXmark} className="icon" />
      </button>

      {filteredLinks.map((page, index) => {
        const { path, name, icon } = page;
        if (path === '/logout') {
          return (
            <Link
              key={index}
              to={path}
              className={pathname === path ? 'nav-link nav-link--current' : 'nav-link'}
              onClick={logout}
              title={name}
            >
              <FontAwesomeIcon icon={icon} className="nav-link__icon" />
              <span className="nav-link__name">{name}</span>
            </Link>
          );
        } else {
          return (
            <Link
              key={index}
              to={path}
              className={pathname === path ? 'nav-link nav-link--current' : 'nav-link'}
              title={name}
            >
              <FontAwesomeIcon icon={icon} className="nav-link__icon" />
              <span className="nav-link__name">{name}</span>
            </Link>
          );
        }
      })}
    </nav>
  );
}

export default Navbar;
