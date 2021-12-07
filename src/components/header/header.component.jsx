import React from "react";
import { Link } from "react-router-dom";
import "./header.component.scss";
import { auth } from "../../firebase-auth/firebase.auth.config";
import { connect } from "react-redux";
import CartIcon from "../carticon/cart-icon.component";
import  CartDropdown  from "../cart-dropdown/cart-dropdown.component";
const Header = ({ currentUser, visible }) => {
  return (
    <div className="header-container">
      <Link className="header" to="/">
        <h1>Shoping</h1>{" "}
      </Link>
      <div className="header-routes">
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
const mapStateToProps = ({ user: { currentUser }, cart: { visible } }) => ({
  currentUser,
  visible,
});
export default connect(mapStateToProps)(Header);
