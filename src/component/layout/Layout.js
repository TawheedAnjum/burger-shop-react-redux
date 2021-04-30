import React from 'react';
import './layout.css';

import Navbar from "../navbar/Navbar";

const Layout = (props) => {
    return (
      <div className={"container"}>
        <header>
          <div><Navbar /></div>
        </header>
        <main>
            {props.children}
        </main>
      </div>
    );
}

export default Layout;