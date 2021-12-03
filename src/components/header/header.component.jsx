import React from 'react';
import { Link } from 'react-router-dom';
import './header.component.scss';

export default function Header() {
    return (
        <div className="header-container">
             <Link className="header" to="/"><h1>Shoping</h1> </Link>
             <div className="header-routes">
                 <Link className="route" to="/sign-in" > SIGNIN </Link>
                 <Link className="route" to="/my-cart" > CART </Link>
             </div>
        </div>
    )
}
