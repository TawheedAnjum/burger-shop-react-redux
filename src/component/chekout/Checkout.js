import React from 'react';
import "./checkout.css";

import FormInput from "../../component/UI/formInput/FormInput";

const Checkout = (props) => {
    return (
      <div>
        <FormInput
          label="Customer Name"
          IdName="CName"
          inputType="text"
          inputValue="Jon Day"
        />
        <FormInput
          label="Adress"
          IdName="adress"
          inputType="text"
          inputValue="Dhaka Bangladesh"
        />
        <FormInput
          label="Card Number"
          IdName="card"
          inputType="number"
          inputValue="1235743"
        />
        <div className="cartAction">
          <div className="cartTotalPeice">Total Price: {props.checkoutPrice}tk</div>
          <button className="submitOrder">Submit Order</button>
        </div>
      </div>
    );
}

export default Checkout;
