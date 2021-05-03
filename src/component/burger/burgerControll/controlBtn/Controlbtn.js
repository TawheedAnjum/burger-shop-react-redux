import React from 'react'
import './controlBtn.css'

const ControlBtn = (props) => {
    return (
      <div className="controllBtn">
        <div className="counterControl">
          <button
            className="LessBtn btn"
            onClick={props.remove}
            disabled={props.disabled}
          >
            -
          </button>
          <button className="counter btn" disabled>
            {props.showNumber}
          </button>
          <button className="moreBtn btn" onClick={props.add}>
            +
          </button>
        </div>
        <div className="controlName">{props.btnName}</div>
      </div>
    );
}

export default ControlBtn;