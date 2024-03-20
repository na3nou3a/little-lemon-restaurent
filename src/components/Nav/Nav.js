import React, { useState } from 'react';
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
      <ul className={opened ? 'open' : ''}>
        <li>
          <a href="/">home</a>
        </li>
        <li>
          <a href="/about">about</a>
        </li>
        <li>
          <a href="/menu">menu</a>
        </li>
        <li>
          <a href="/bookings">reservations</a>
        </li>
        <li>
          <a href="/order">order online</a>
        </li>
        <li>
          <a href="/login">login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
