import React from 'react';
import './layout.css';


const Layout = (props) => {
    return (
      <div className={"container"}>
        <header className="header">
          <div>navbar</div>
          <div>navbar</div>
        </header>
        <main>
            {props.children}
        </main>
      </div>
    );
}

export default Layout;