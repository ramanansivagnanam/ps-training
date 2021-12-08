import React from "react";
import { connect } from "react-redux";
import { clearItem } from "../../../redux/cart_reducer/cartActions";
import "./cart-item-page.style.scss";

const CartItemPage = ({ item , clearItem }) => {
  const { imageUrl, name, quantity, price } = item; 
  return (
    <div className="cart-item-page-container">
      <div className="column">
        <img className="cart-items-image" src={imageUrl} alt="item" />
      </div>
      <div className="cart-item-name column">
        <h3>{name}</h3>
      </div>
      <div className="cart-item-quantity column">
        <div className="add-remove-items">
          <span className="cart-item-add">-</span>
          <h3>{quantity}</h3>
          <span className="cart-item-remove">+</span>
        </div>
      </div>
      <div className="cart-item-price column">
        <h3>{price}</h3>
      </div>
      <div className="cart-item-remove column">
        <h3 onClick={()=>clearItem(item)}>X</h3>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
    clearItem : item => dispatch(clearItem(item))
})

export default connect(null,mapDispatchToProps)(CartItemPage);
