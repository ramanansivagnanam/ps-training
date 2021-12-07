import React from "react";
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { CartItems } from "../cart-items/cart-items.component";
import "./cart-dropdown.style.scss";
import { cartItemsSelector } from "../../redux/cart_reducer/cart.selectors";
import { toggleDropdown } from "../../redux/cart_reducer/cartActions";
const CartDropdown = ({ cartItems, dispatch }) => {
  const naviagate = useNavigate();
  return (
    <div className="cart-dropdown-container">
      {cartItems.length ? (
        <>
          <CartItems cartItems={cartItems} />
          <button className="cart-button"
           onClick={() =>{naviagate("/cart-items");dispatch(toggleDropdown()) }}
          >Go to cart</button>
        </>
      ) : <span className="cart-empty-message">No items available</span>}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: cartItemsSelector(state),
});

export default connect(mapStateToProps)(CartDropdown);
