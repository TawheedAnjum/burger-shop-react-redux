import React from 'react'

import { useHistory } from "react-router-dom";

import "./logo.css"
import logo from "../../../assets/images/logo.png"

const Logo = () => {
    let history = useHistory();

    function handleClick() {
      history.push("/");
    }
    return(
        <img src={logo} alt="logo" className="logo" onClick={handleClick}/>
    )
}

export default Logo;