import React from 'react';

import "./ingredientInfo.css"

import top from "../../../assets/images/burger/top.svg";
import bottom from "../../../assets/images/burger/bottom1.svg";
import salad from "../../../assets/images/burger/salad.svg";
import chees from "../../../assets/images/burger/chees.svg";
import meat from "../../../assets/images/burger/meat.svg";

const IngredientInfo = () => {
    return (
      <div className="ingredientInfo">
        <table>
          <tr>
            <th>
              <img src={top} className="imgth" />
            </th>
            <th>Bread</th>
            <th>2x</th>
            <th>180tk</th>
          </tr>
          <tr>
            <th>
              <img src={salad} className="imgth" />
            </th>
            <th>Salad</th>
            <th>2x</th>
            <th>180tk</th>
          </tr>
          <tr>
            <th>
              <img src={chees} className="imgth" />
            </th>
            <th>Chees</th>
            <th>2x</th>
            <th>180tk</th>
          </tr>
          <tr>
            <th>
              <img src={meat} className="imgth" />
            </th>
            <th>Meat</th>
            <th>2x</th>
            <th>180tk</th>
          </tr>
        </table>
      </div>
    );
}

export default IngredientInfo;