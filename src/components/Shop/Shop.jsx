import React from 'react';
import './shop.css';
import cat1 from '../../assets/bedroom.png';
import cat2 from '../../assets/livingroom.png';
import cat3 from '../../assets/diningroom.png';
import Products from './index.js';
import Card from '../../utils/Card/Card.jsx';

const Shop = () => {
    return (
        <div className='shop-container'>
            <div className='shop-header'>
                <h1>Browse The Range</h1>
            </div>
            <div className='shop-categoires'>
                <div className='shop-category'>
                    <img className='category-img' src={cat1} alt="bedroom" />
                    <p className='category-title'>Bedroom</p>
                </div>
                <div className='shop-category'>
                    <img className='category-img' src={cat2} alt="living room" />
                    <p className='category-title'>Living</p>
                </div>
                <div className='shop-category'>
                    <img className='category-img' src={cat3} alt="dining room" />
                    <p className='category-title'>Dining</p>
                </div>
            </div>
            <div className='shop-header'>
                <h1>Our Products</h1>
            </div>
            <div className='shop-products'>
                {
                    Products.map((product) => {
                        return (
                            <Card
                                title={product.title}
                                desc={product.desc}
                                price={product.price}
                                img={product.img}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Shop