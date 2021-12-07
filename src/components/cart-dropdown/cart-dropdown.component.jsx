import React from "react";
import { connect } from "react-redux";
import { CartItems } from "../cart-items/cart-items.component";
import "./cart-dropdown.style.scss";
import { cartItemsSelector } from '../../redux/cart_reducer/cart.selectors';
const CartDropdown = ({ cartItems}) => {
  return (
    <div className="cart-dropdown-container">
      <CartItems cartItems={cartItems} />
      <button className="cart-button">Go to cart</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
    cartItems : cartItemsSelector(state)
});

export default connect(mapStateToProps)(CartDropdown);