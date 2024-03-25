import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menuIcon from '../../images/menu.svg';
import './styles.css';

function Nav() {
  const [opened, setOpened] = useState(false);
  const openMenu = () => {
    if (!opened) {
      setOpened(true);
    } else {
      setOpened(false);
    }
  };
  return (
    <nav className="main-nav">
      <button className="toggle-menu-btn" onClick={openMenu}>
        <img src={menuIcon} className="icon" alt="toggle menu icon" />
      </button>
      <ul className={opened ? 'open' : undefined}>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/menu">menu</Link>
        </li>
        <li>
          <Link to="/bookings">reservations</Link>
        </li>
        <li>
          <Link to="/order">order online</Link>
        </li>
        <li>
          <Link to="/login">login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
