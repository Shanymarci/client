import React from "react";
import { useFormContext } from "react-hook-form";

import InputProps from "../interfaces/inputProps";

const Input: React.FC<{ inputProps: InputProps; errors: Record<string, any> }> = ({
  inputProps,
  errors,
}) => {
  const { name, label, type, className, id, onChange, validation } = inputProps;
  const { register } = useFormContext();

  return (
    <div className="form-group">
      <label htmlFor = {id}>{label}</label>
      <input
        type={type}
        className = {className}
        id={id}
        required
        {...register(id, validation)}
      />
      {errors[name] && <p style={{ color: 'red' }}>{errors[name].message}</p>}

    </div>
  );
};

export default Input;
