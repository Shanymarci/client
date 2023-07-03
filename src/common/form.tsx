import React from "react";
import { useForm, FormProvider } from "react-hook-form";

import FormProps from "../models/formProps";
import Input from "./input";

const Form: React.FC<FormProps> = ({ form, input, buttonLabel, validation }) => {
  const methods = useForm();

  const onSubmit = (data: any) => {
    form.onSubmit(data);
  };

  return (
    <div className="container">
      <h2>{form.label}</h2>
      <FormProvider {...methods}>
        <form onSubmit = {methods.handleSubmit(onSubmit)}>
          {input.map((elem) => (
            <Input key={elem.id} inputProps = { elem } errors = {methods.formState.errors} />
          ))}
          <button type="submit" className="btn btn-primary">
            {buttonLabel}
          </button>
        </form>
      </FormProvider>
    </div>
  );
};

export default Form;
