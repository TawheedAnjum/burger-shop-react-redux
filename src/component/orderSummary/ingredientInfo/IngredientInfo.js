import React from 'react';

import "./ingredientInfo.css"

import IngredientInfoImg from "./IngredientInfoImg";


const IngredientInfo = (props) => {
  return (
    <div className="ingredientInfo">
      <table>
        <tr>
          <th>
            <IngredientInfoImg image={props.imgInfo} />
          </th>
          <th>{props.headerName}</th>
          <th>{props.quantity}x</th>
          <th>{props.taka}tk</th>
        </tr>
      </table>
    </div>
  );
};

export default IngredientInfo;