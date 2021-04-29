import React from 'react';
import "./model.css";

const Model = (props) => {
    return (
      <div
        className="model"
        style={{
          visibility: props.show ? 'visible' : 'hidden',
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        }}
      >
        {props.children}
      </div>
    );
} 

export default Model;