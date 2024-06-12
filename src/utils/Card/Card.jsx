import React from 'react';
import './card.css';

const Card = ({title, desc, price, img}) => {
  return (
    <div className='card-container'>
        <img className='card-img' src={img} alt="image" />
        <p className='card-title'>{title}</p>
        <p className='card-desc'>{desc}</p>
        <p className='card-price'>₹ {price}</p>
    </div>
  )
}

export default Card;
