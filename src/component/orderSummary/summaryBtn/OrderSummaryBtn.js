import React from 'react'
import "./orderSummaryBtn.css"

const OrderSummaryBtn = (props) => {
    return (
        <button className={"orderSummaryBtn "+props.ObtnName } onClick={props.btnHandaler}>{props.SbtnName}</button>
    )
}

export default OrderSummaryBtn;