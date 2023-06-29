import React from "react";

import InputProps from "../interfaces/inputProps";

const Input: React.FC<{ inputProps: InputProps }> = ( props ) => {
    const { inputProps } = props;

    return (
        <div className="form-group">
        <label htmlFor = {inputProps.type}>{inputProps.label}</label>
        <input
          type = {inputProps.type}
          className = {inputProps.className}
          id = {inputProps.id}
          onChange = {(e) => inputProps.onChange(e.target.value)}
          required
        />
      </div>
    )
}

export default Input;