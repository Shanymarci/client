import "./Signin.css";

import React, { useState,FormEvent } from "react";

import axios from "axios";

import { apiUrl } from "../../../config";

import Form from "../../../common/form";

import { http } from "../../../instances/doteNetServer";

function SignIn(): JSX.Element {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const inputData = [
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


    /*
        const handleSumbit = () => {

        const queryFormat = convertToQueryParamFormat(country);
        const searchUrl = url + queryFormat;

        axios.get<UniModel[]>(searchUrl)
        .then(res => {
            setResults(res.data);
            console.log(res.data);
            notifyService.success('☺')
        })
        .catch(err => {
            //what is this used for ?
            notifyService.error('N/A')})
    }
    */

    const handleSubmit = async() => {
        
        try {
            const user = await http.post('/api/Users/login',{email,password});
            console.log(user);
            //localStorageAuth.setData({ uid: user.uid, name: user.displayName || "" });
            //window.location.assign("/hours");
        } catch (error) {
            console.log(error);
        }
      };
    
      const form = {
        label: "Login Form",
        onSubmit: handleSubmit,
    };

    const buttonLabel = 'Login';

    return (
        <Form 
        form = { form }
        input = { inputData }
        buttonLabel = { buttonLabel }
        />
    );
}

export default SignIn;