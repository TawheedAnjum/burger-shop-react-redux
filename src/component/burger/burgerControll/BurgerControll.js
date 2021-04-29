import React from "react";

import burgerHeader from '../../../assets/images/burgerHeader.png'
import './burgerControll.css';
import ControlBtn from './controlBtn/Controlbtn'

const controls = [
  {label: "Salad", type: "salad"},
  {label: "Chees", type: "chees"},
  {label: "Meat", type: "meat"}
]
const BurgerControll = (props) => {
    return (
      <div className="burgerControll">
        <img src={burgerHeader} alt="burger header" className="burgerheader" />
        <p>
          Lorem Ipsum is simply dummy text of the printing <br />
          and typesetting industry
        </p>

        <div className="importbtn">
          {controls.map((crt) => {
            return (
              <ControlBtn
                key={crt.label}
                btnName={crt.label}
                remove={() => {
                  props.less(crt.type);
                }}
                add={() => {
                  props.more(crt.type);
                }}
                showNumber={props.number[crt.type]}
                btnVisible={props.btnStatus}
              />
            );
          })}
        </div>
        <button
          className="orderbtn"
          onClick={props.orderShow}
          disabled={!props.orderBtn}
        >
          Order Now
        </button>
      </div>
    );
}

export default BurgerControll;