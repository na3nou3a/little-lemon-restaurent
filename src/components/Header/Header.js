import React from 'react';
import Nav from '../Nav';
import logo from '../../images/littleLemonLogo.png'

function Header() {
  return <header>
    <img src={logo} alt='website logo'/>
    <Nav/>
  </header>;
}

export default Header;
