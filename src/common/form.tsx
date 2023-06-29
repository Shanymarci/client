import React from "react";

import formProps from "../interfaces/formProps";

import Input from "./input";

const Form: React.FC<formProps> = ({ form,input,buttonLabel }) => {

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        form.onSubmit();
    };

    return (
      <div className="container">
        <h2>{form.label}</h2>
        <form onSubmit = { onSubmit }>

            {input.map((elem) => {
                return(
                    <Input inputProps = { elem } />
                )
            })}

          <button type="submit" className="btn btn-primary">{ buttonLabel }</button>
        </form>
      </div>
    )
}

export default Form;