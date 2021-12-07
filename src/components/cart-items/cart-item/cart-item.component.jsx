import React from 'react';
import './cart-item.style.scss';

const CartItem = ({ cartItem : { imageUrl, name, price, quantity}}) => {
    return (
        <div className="cart-item">
            <img className="cart-image" src={imageUrl} alt="item" />
            <p className="title">{name}</p> 
            <span className="count">{quantity} X </span>
            <span className="price">${price}</span>
        </div>
    )
}

export default CartItem;
