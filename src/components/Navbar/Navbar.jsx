import React from 'react';
import './navbar.css';
import Logo from '../../utils/Logo/Logo';
import icon1 from '../../assets/nav1.png';
import icon2 from '../../assets/nav2.png';
import icon3 from '../../assets/nav3.png';
import icon4 from '../../assets/nav4.png';
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='navbar-logo'>
        <Logo />
      </div>
      <div className='navbar-menu'>
        <AnchorLink href="#home">
          <button className='navbar-menu-btn'>Home</button>
        </AnchorLink>
        <AnchorLink href="#shop">
          <button className='navbar-menu-btn'>Shop</button>
        </AnchorLink>
        <AnchorLink href="#about">
          <button className='navbar-menu-btn'>About</button>
        </AnchorLink>
        <AnchorLink href="#contact">
          <button className='navbar-menu-btn'>Contact</button>
        </AnchorLink>
      </div>
      <div className='navbar-icons'>
        <img src={icon1} alt="icons" />
        <img src={icon2} alt="icons" />
        <img src={icon3} alt="icons" />
        <img src={icon4} alt="icons" />
      </div>
    </div>
  )
}

export default Navbar