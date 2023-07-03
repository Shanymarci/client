/* import "./SignUp.css"; */

import { useState } from "react";
import Form from "../../../common/form";

import axios from "axios";

import { apiUrl } from "../../../config";

function SignUp(): JSX.Element {
    const [name,setName] = useState<string>("");
    const [lastName,setLastName] = useState<string>("");
    const [email,setEmail] = useState<string>("");
    const [password,setPassword] = useState<string>("");
    const [verifyPassword,setVerifyPassword] = useState<string>("");

    const handleSubmit = (data : any) => {

        const endPoint = "/api/Users/register";
        const url = apiUrl + endPoint;
        
        axios.post(url, data)
                .then(res => {
                  //do what you need here
                    console.log(res.data);
                })
                .catch(err => {  
                    console.log("error");
                });
    }

    const inputData = [
        {
          type: "text",
          label: "First Name:",
          className: "form-control",
          id: "firstName",
          name: "firstName",
          onChange: setName,
          validation: {
            required: "First name is required",
          },
        },
        {
          type: "text",
          label: "Last Name:",
          className: "form-control",
          id: "lastName",
          name: "lastName",
          onChange: setLastName,
          validation: {
            required: "Last name is required",
          },
        },
        {
          type: "email",
          label: "Email:",
          className: "form-control",
          id: "email",
          name: "email",
          onChange: setEmail,
          validation: {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email format",
            },
          },
        },
        {
          type: "password",
          label: "Password:",
          className: "form-control",
          id: "password",
          name: "password",
          onChange: setPassword,
          validation: {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
          },
        },
        {
          type: "password",
          label: "Repeat Password:",
          className: "form-control",
          id: "repeatPassword",
          name: "repeatPassword",
          onChange: setVerifyPassword,
          validation: {
            required: "Repeat password is required",
          },
        },
      ];
      

    const form = {
        label: "Signup Form",
        onSubmit: handleSubmit,
    };

    const buttonLabel = 'Sign up';

    return (
        <Form 
        form = { form }
        input = { inputData }
        buttonLabel = { buttonLabel }
        />
    );
}

export default SignUp;