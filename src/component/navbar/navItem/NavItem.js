import React from 'react'
import "./navItem.css"
const NavItem = () => {
    return (
      <ul className="navItem">
        <li>
          <a href="http://localhost:3000/">Home</a>
        </li>
        <li>
          <a href="http://localhost:3000/">Checkout</a>
        </li>
        <li>
          <a href="http://localhost:3000/">Login</a>
        </li>
      </ul>
    );
}

export default NavItem;
