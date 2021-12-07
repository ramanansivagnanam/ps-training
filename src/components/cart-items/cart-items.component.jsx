import React from "react";
import CartItem from "./cart-item/cart-item.component";
import "./cart-items.style.scss";
export const CartItems = ({ cartItems }) => {
  return (
    <div className="cart-items">
      {cartItems.map((cartItem) => {
        return <CartItem key={cartItem.id} cartItem={cartItem}/>;
      })}
    </div>
  );
};
