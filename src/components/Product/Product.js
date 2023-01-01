import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import './Product.css';
import { useState } from 'react';

const Product = ({product, handleAddToCart}) => {
    const {img, name, price, seller, ratings} = product;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-details'>
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price ${price}</p>
                <p><small>Manufacturer:{seller}</small></p>
                <p><small>Rating: {ratings} stars</small></p>
            </div>
            <button className='btn-cart'>
                <p onClick={() => handleAddToCart(product)} className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;