import React from "react";
import { Link } from "react-router-dom";
import "./header.component.scss";
import { auth } from '../../firebase-auth/firebase.auth.config';
export default function Header({ currentUser }) {
  return (
    <div className="header-container">
      <Link className="header" to="/">
        <h1>Shoping</h1>{" "}
      </Link>
      <div className="header-routes">
        <Link className="route" to="/my-cart">
          {" "}
          CART{" "}
        </Link>
        {currentUser ? (
          <div className="route" onClick={()=> { auth.signOut() }}> SIGN OUT </div>
        ) : (
          <Link className="route" to="/sign-in">
            {" "}
            SIGNIN{" "}
          </Link>
        )}
      </div>
    </div>
  );
}
