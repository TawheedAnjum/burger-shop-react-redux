import React from 'react';
import "./formInput.css";

const FormInput = (props) => {
    return (
      <div className="formPossition">
        <div className="formInput">
          <label htmlFor={props.IdName}>
            {props.label}
            <br />
            <input
              type={props.inputType}
              id={props.IdName}
              value={props.inputValue}
              onChange={props.changeValue}
            />
          </label>
        </div>
      </div>
    );
}

export default FormInput;