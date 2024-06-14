import React from 'react';
import './about.css';
import img1 from '../../assets/AboutImg1.png';
import img2 from '../../assets/AboutImg2.png';

const About = () => {
  return (
    <div className='about-container'>
        <div className='about-contents'>
            <h1 className='about-heading'>50+ Beautiful rooms <br /> inspiration</h1>
            <p className='about-desc'>Our designer already made a lot of beautiful <br /> prototipe of rooms that inspire you</p>
            <button className='about-btn'>Explore More</button>
        </div>
        <div className='about-images'>
            <img src={img2} alt="About Image" />
            <div className='about-image'>
                <img src={img1} alt="About Image" />
                <div className='dots-container'>
                    <p className='about-dots'>• </p>
                    <p className='about-dots'>• </p>
                    <p className='about-dots'>• </p>
                    <p className='about-dots'>• </p>
                </div>
                
            </div>
            
        </div>
    </div>
  )
}

export default About