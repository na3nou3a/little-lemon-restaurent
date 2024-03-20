import React from 'react';
import logo from '../../images/littleLemonLogo.png';
import './styles.css';

function Header() {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="website logo" />
    </header>
  );
}

export default Header;
