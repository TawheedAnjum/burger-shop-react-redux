import React from 'react'
import "./navItem.css"
import { NavLink } from "react-router-dom";

const NavItem = () => {
    return (
      <ul className="navItem">
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          {/* <NavLink
            to="/checkout"
            isActive={(match, location) => location.search}
          >
            Checkout
          </NavLink> */}
          <NavLink to="/checkout">Checkout</NavLink>
        </li>
        <li>
          <NavLink to="/order">Orders</NavLink>
        </li>
      </ul>
    );
}

export default NavItem;
