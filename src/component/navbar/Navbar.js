import React from 'react';

import Logo from "./logo/Logo";
import NavItem from "./navItem/NavItem";
import "./navbar.css";

const Navbar = () => {
    return(
        <nav className="nav">
            <Logo />
            <NavItem />
        </nav>
    )
}

export default Navbar;