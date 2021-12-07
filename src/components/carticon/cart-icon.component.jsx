import React from "react";
import { connect } from "react-redux";
import { cartItemTotalCount } from "../../redux/cart_reducer/cart.selectors";
import { toggleDropdown } from "../../redux/cart_reducer/cartActions";
import "./cart-icon.style.scss";
function CartIcon({ toggleDropdown, count = 0 }) {
  return (
    <div className="cart-icon" onClick={toggleDropdown}>
      <h3 className="title">Cart</h3>
      <span className="item-count">{count}</span>
    </div>
  );
}
const mapStateToProps = (state) => ({
  count: cartItemTotalCount(state),
});
const mapDispatchToProps = (dispatch) => ({
  toggleDropdown: () => dispatch(toggleDropdown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
