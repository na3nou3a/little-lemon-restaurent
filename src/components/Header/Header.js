import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/littleLemonLogo.png';
import './header.css';

function Header() {
  return (
    <header className="main-header">
      <Link to="/">
        <img className="logo" src={logo} alt="website logo" />
      </Link>
    </header>
  );
}

export default Header;
