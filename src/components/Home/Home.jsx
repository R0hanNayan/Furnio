import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className='home-container' id='home'>
        <div className='home-intro'>
            <p className='home-intro-p1'>New Arrival</p>
            <p className='home-intro-p2'>Discover Our New Collection</p>
            <p className='home-intro-p3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <button className='home-intro-btn'>BUY NOW</button>
        </div>
    </div>
  )
}

export default Home