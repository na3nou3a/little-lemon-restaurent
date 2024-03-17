import React from 'react';

function Nav() {
  return (
    <nav>
      <ul>
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
