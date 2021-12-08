import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { cartItemsSelector, cartItemsTotalAmount } from "../../redux/cart_reducer/cart.selectors";
import CartItemPage  from "./cart-item-page/cart-item-page.component";
import "./cartitems.style.scss";

const CartitemsPage = ({ cartItems, total }) => {
  return (
    <div className="cart-items-page-container">
      <div className="card-items-page-header">
        <div className="cart-items-image column">
          <h3>Product Image</h3>
        </div>
        <div className="cart-item-name column">
          <h3>Name</h3>
        </div>
        <div className="cart-item-quantity column">
          <h3>Quantity</h3>
        </div>
        <div className="cart-item-price column">
          <h3>Price</h3>
        </div>
        <div className="cart-item-price column">
          <h3>Remove</h3>
        </div>
      </div>
      {cartItems.map((item) => {
        return (<CartItemPage key={item.id} item={item} />);
      })}
      <div className="cart-items-total">
        <h2>Total: ${total}</h2>
      </div>
    </div>
  );
};

const mapStateToProps = (state) =>
  createStructuredSelector({
    cartItems: cartItemsSelector,
    total: cartItemsTotalAmount
  });

export default connect(mapStateToProps)(CartitemsPage);
