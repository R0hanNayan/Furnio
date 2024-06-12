import React from 'react';
import './navbar.css';
import Logo from '../../utils/Logo/Logo';
import icon1 from '../../assets/nav1.png';
import icon2 from '../../assets/nav2.png';
import icon3 from '../../assets/nav3.png';
import icon4 from '../../assets/nav4.png';

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className='navbar-logo'>
            <Logo />
        </div>
        <div className='navbar-menu'>
            <button className='navbar-menu-btn'>Home</button>
            <button className='navbar-menu-btn'>Shop</button>
            <button className='navbar-menu-btn'>About</button>
            <button className='navbar-menu-btn'>Contact</button>
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