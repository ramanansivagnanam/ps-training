import React from "react";
import { connect } from "react-redux";
import { toggleDropdown } from "../../redux/cart_reducer/cartActions";
import "./cart-icon.style.scss";
function CartIcon({ toggleDropdown, count = 0 }) {
  return (
    <div className="cart-icon" onClick={toggleDropdown}>
      <h1 className="title">Cart</h1>
      <span className="item-count">{count}</span>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  toggleDropdown: () => dispatch(toggleDropdown()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
