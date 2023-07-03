import "./Signin.css";

import React, { useState,FormEvent } from "react";

import { useForm } from 'react-hook-form';

import axios from "axios";

import { apiUrl } from "../../../config";

import Form from "../../../common/form";

import { http } from "../../../instances/doteNetServer";
import { auth } from "../../../instances/localStorage";

function SignIn(): JSX.Element {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const { register, handleSubmit } = useForm();

    const inputData = [
        {
            type: "email",
            label : "Email:",
            className : "form-control",
            id : "email",
            name: 'email',
            onChange : setEmail,
            validation: {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format"
                }
              }
        },
        {
            type: "password",
            label : "Password:",
            className : "form-control",
            id : "password",
            name: 'password',
            onChange : setPassword,
            validation: {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long"
                }
            }
        },
    ]

    const onSubmit = async(data: any) => {

        try {
            //send request to the server
            auth.setData({email : data.email, password : data.password});
            window.location.assign("/search");
            
        } catch (error) {
            console.log(error);
        }
      };
    
      const form = {
        label: "Login Form",
        onSubmit: onSubmit,
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