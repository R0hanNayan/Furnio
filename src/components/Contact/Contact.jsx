import React from 'react';
import './contact.css';
import img1 from '../../assets/contact.png';
import Logo from '../../utils/Logo/Logo.jsx';

const Contact = () => {
  return (
    <div className='contact-container' id='contact'>
        <p className='contact-p1'>Share your setup with</p>
        <h1 className='contact-header'>#FurnioFurniture</h1>
        <img className='contact-img' src={img1} alt="Contact" />
        <p className='blank-line1'></p>
        <div className='contact-innerContainer'>
          <Logo />
          <p className='contact-p2'>400 University Drive Suite 200 Coral Gables,<br />FL 33134 USA</p>
          <p className='blank-line2'></p>
          <p className='contact-copyright'>2024 furino. All rights reverved</p>
        </div>
    </div>
  )
}

export default Contact