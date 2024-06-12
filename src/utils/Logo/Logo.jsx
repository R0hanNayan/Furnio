import React from 'react';
import './logo.css';
import logo from '../../assets/logo.png';

const Logo = () => {
  return (
    <div className='logo-container'>
        <img className='logo-icon' src={logo} alt="Logo" />
        <p className='logo-name'>Furnio</p>
    </div>
  )
}

export default Logo