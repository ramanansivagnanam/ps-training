import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";
import { auth } from "../../firebase-auth/firebase.auth.config";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import CartIcon from "../carticon/cart-icon.component";
import "./header.component.scss";
import { selectVisible } from "../../redux/cart_reducer/cart.selectors";
import { selectCurrentUser } from "../../redux/user_reducer/user.selector";
const Header = ({ currentUser, visible }) => {
  return (
    <div className="header-container">
      <Link className="header" to="/">
        <h1>Home</h1>{" "}
      </Link>
      <div className="header-routes">
      <Link className="route" to="/item-details">
        shop
      </Link>
        <CartIcon />
        {currentUser ? (
          <div
            className="route"
            onClick={() => {
              auth.signOut();
            }}
          >
            {" "}
            SIGN OUT{" "}
          </div>
        ) : (
          <Link className="route" to="/sign-in">
            {" "}
            SIGNIN{" "}
          </Link>
        )}
        {visible ? <CartDropdown /> : null}
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  visible: selectVisible,
});
export default connect(mapStateToProps)(Header);
