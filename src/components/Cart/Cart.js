import React from 'react';
import Product from '../Product/Product';
import './Cart.css';

const Cart = (props) => {
const {cart} = props;

    console.log(props.children);

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <p className='order-summary'>Order Summary</p>
                <p>Selected item: {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <p className='grand-total'>Grand Total: ${grandTotal}</p>
                {props.children}
        </div>
    );
};

export default Cart;