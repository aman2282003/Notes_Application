import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

export const Signin = () => {
    const toast = useToast();

    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = formData;

        if (email.trim() && password.trim()) {
           alert("Account Created Succesfully, Please Login")

            localStorage.setItem('userData', JSON.stringify(formData));
            setFormData({ email: "", password: "" });
        } 
        else {
             alert("Wrong input");
        }
    };

    return (
        <div className='flex flex-col justify-center items-center'>
            <p className='font-bold text-3xl mt-20'>Create your account</p>
            <div className='m-2'>
                <p className='font-xl'>Not sure if you have an account?</p>
                <p className='font-xl'>Enter your email and we'll check for you.</p>
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col items-center'>
                <p className='font-bold text'>Enter Email Address</p>
                <input className="border border-black m-1 h-12 w-72" type="email" name="email" value={formData.email} onChange={handleChange} />
                <p className='font-bold text'>Enter Password</p>
                <input className="border border-black m-1 h-12 w-72" type="password" name="password" value={formData.password} onChange={handleChange} />
                <button className="bg-violet-500 m-3 p-3 rounded-full w-72" type="submit">Submit</button>
            </form>
            <p className='mt-4'>Already a user? <Link to="/Login" className='underline text-blue-600'>Click Here</Link> to login</p>
            <div className='mt-4'>
                <p className='font-xl'>Securing your personal information is our priority.</p>
                <p className='font-xl underline'>See our Privacy measures.</p>
            </div>
        </div>
    );
};
