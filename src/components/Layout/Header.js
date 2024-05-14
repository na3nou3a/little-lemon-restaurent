import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/littleLemonLogo.png';
import Navbar from './Navbar';

function Header(props) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const { pathname } = useLocation();
  return (
    <header className="header">
      <div className="header-content max-width">
        {/* hamburger btn */}
        <button
          className="hamburger-btn"
          aria-label="toggle menu"
          onClick={() => setIsNavExpanded(!isNavExpanded)}
          title={isNavExpanded ? 'close' : 'open'}
        >
          <FontAwesomeIcon icon={faBars} size="2x" className="icon" />
        </button>
        {/* **** header logo **** */}
        <Link to="/" className="logo-container">
          <img className="header-logo" src={logo} alt="website logo" />
        </Link>
        {/* **** navigation **** */}
        <Navbar {...props} isNavExpanded={isNavExpanded} setIsNavExpanded={setIsNavExpanded} />
        {/* **** shopping cart **** */}
        <Link
          to="/order"
          className={pathname === '/order' ? 'orders-link orders-link--current' : 'orders-link'}
          title="orders"
        >
          <FontAwesomeIcon icon={faCartShopping} className="orders-link_icon" />
          <span className="counter">{props.counter}</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
