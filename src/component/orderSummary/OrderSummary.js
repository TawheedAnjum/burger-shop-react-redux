import React from 'react'

import "./orderSummary.css";
import Price from "./price/Price";
import IngredientInfo from "./ingredientInfo/IngredientInfo";
import UserInfo from "./userInfo/UserInfo";
import OrderSummaryBtn from "./summaryBtn/OrderSummaryBtn";

const OrderSummay = (props) => {
const cartInfo = Object.keys(props.items).map((i) => {
  return (
    <IngredientInfo
      key={i}
      imgInfo={i}
      headerName={i}
      quantity={props.items[i]}
      taka={
        <Price
          itemName={i}
          orderPrice={props.itemPrice}
          itemValue={props.items[i]}
        />
      }
    />
  );
});

  return (
    <div className="orderSummary">
      <p>
        Home/<span className="checkout">Cart</span>
      </p>
      <div className="information">
        <div>
          <IngredientInfo
            imgInfo="top"
            key="bread"
            headerName="bread"
            quantity="2"
            taka="20"
          />
          {cartInfo}
        </div>
        <UserInfo tPrice={props.totalPrice} />
      </div>
      <div className="summaryBtn">
        <OrderSummaryBtn
          SbtnName="Cancel"
          ObtnName="cancel"
          btnHandaler={props.cancel}
        />
        <OrderSummaryBtn
          SbtnName="Submit"
          ObtnName="submit"
          btnHandaler={props.submit}
        />
      </div>
    </div>
  );
}

export default OrderSummay;