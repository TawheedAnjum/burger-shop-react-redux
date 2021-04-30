import React from "react";

import top from "../../../assets/images/burger/top.svg";
import salad from "../../../assets/images/burger/salad.svg";
import chees from "../../../assets/images/burger/chees.svg";
import meat from "../../../assets/images/burger/meat.svg";
import "./ingredientInfo.css";

const IngredientsControl = (props) => {

  switch (props.image) {
    case "top":
      return <img src={top} className="imgh" alt="top bread ingredients" />;
    case "salad":
      return <img src={salad} className="imgh" alt="salad ingredients" />;
    case "chees":
      return <img src={chees} className="imgh" alt="chees ingredients" />;
    case "meat":
      return <img src={meat} className="imgh" alt="meat ingredients" />;
    default:
      return null;
  }

};

export default IngredientsControl;
