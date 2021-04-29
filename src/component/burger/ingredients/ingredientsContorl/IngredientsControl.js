import React from "react";

import top from '../../../../assets/images/burger/top.svg'
import bottom from "../../../../assets/images/burger/bottom1.svg";
import salad from "../../../../assets/images/burger/salad.svg";
import chees from "../../../../assets/images/burger/chees.svg";
import meat from "../../../../assets/images/burger/meat.svg";
import './ingredients.css'

const IngredientsControl = (props) => {

  switch (props.image) {
    case "top":
      return <img src={top} className="top"  alt="top bread ingredients"/>;
    case "salad":
      return <img src={salad} className="salad" alt="salad ingredients" />;
    case "chees":
      return <img src={chees} className="chees" alt="chees ingredients" />;
    case "meat":
      return <img src={meat} className="meat" alt="meat ingredients" />;
    case "bottom":
      return <img src={bottom} className="bottom" alt="botom bread ingredients" />;
    default:
      return null;
  }

};

export default IngredientsControl;
