/* import "./SignUp.css"; */

import { useState } from "react";
import Form from "../../../common/form";

import axios from "axios";

import { apiUrl } from "../../../config";

function SignUp(): JSX.Element {
    const [name,setName] = useState<string>("");
    const [email,setEmail] = useState<string>("");
    const [password,setPassword] = useState<string>("");

    const handleSubmit = () => {

        const endPoint = "/api/Users/register";
        const url = apiUrl + endPoint;
        
        axios.post(url, {name,email,password})
                .then(res => {
                    console.log(res.data);
                })
                .catch(err => {  
                    console.log("error");
                });
    }



    const inputData = [
        {
            type: "name",
            label : "Name:",
            className : "form-control",
            id : "name",
            onChange : setName
        },        
        {
            type: "email",
            label : "Email:",
            className : "form-control",
            id : "email",
            onChange : setEmail
        },
        {
            type: "password", 
            label : "Password:",
            className : "form-control",
            id : "password",
            onChange : setPassword
        },
    ]

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