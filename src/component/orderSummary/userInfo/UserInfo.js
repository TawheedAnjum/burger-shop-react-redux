import React from "react";
import "./userInfo.css";

const IngredientInfo = (props) => {
  return (
    <div className="userInfo">
      <h4 className="checkoutInfo">
        Checkout <hr />
      </h4>

      <table>
        <tr>
          <th>User Name:</th>
          <th className="infoValue">Tawheed</th>
        </tr>
        <tr>
          <th>Phone:</th>
          <th className="infoValue">01234567890</th>
        </tr>
        <tr>
          <th>Adress:</th>
          <th className="infoValue">Dhaka, Bangladesh</th>
        </tr>
        <tr>
          <th>Total Price:</th>
          <th className="infoValue totalValue">{props.tPrice}</th>
        </tr>
      </table>
    </div>
  );
};

export default IngredientInfo;
