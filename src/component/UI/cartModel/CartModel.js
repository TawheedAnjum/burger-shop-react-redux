import React from 'react'
import "./cartModel.css";

const CartModel = (props) => {
    return (
      <div className="cartPossition">
        <div className="cartModel">{props.children}</div>
      </div>
    );
}

export default CartModel;