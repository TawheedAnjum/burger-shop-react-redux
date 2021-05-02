import React from 'react';
import "./formInput.css";

const FormInput = (props) => {
    return (
      <div className="formPossition">
        <div className="formInput">
          <label for={props.IdName}>{props.label}</label>
          <br />
          <input
            type={props.inputType}
            id={props.IdName}
            value={props.inputValue}
          />
        </div>
      </div>
    );
}

export default FormInput;