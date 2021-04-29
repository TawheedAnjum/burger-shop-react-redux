import React from 'react'

import "./orderSummary.css";
import Price from "./price/Price";
import IngredientInfo from "./ingredientInfo/IngredientInfo";
import UserInfo from "./userInfo/UserInfo";

const OrderSummay = (props) => {
    const orderItems = Object.keys(props.items).map(i => {
        return (
          <li key={i}>
            {i} : {props.items[i]} :
            <Price
              itemName={i}
              orderPrice={props.itemPrice}
              itemValue={props.items[i]}
            />
          </li>
        );
    })
    return (
      <div>
        <div className="orderSummary">
          <p>
            Home/<span className="checkout">Cart</span>
          </p>
          <div className="information">
            <IngredientInfo />
            <UserInfo />
          </div>
          <ul>
            <li>Bread: 1</li>
            {orderItems}
          </ul>
          <h4>Total Price: {props.totalPrice} taka</h4>
          <button>Submit</button>
          <button onClick={props.cancel}>Cancel</button>
        </div>
      </div>
    );
}

export default OrderSummay;