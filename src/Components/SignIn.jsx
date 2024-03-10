import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

export const Signin = () => {
    const toast = useToast();

    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = formData;

        if (email.trim() && password.trim()) {
            toast({
              title: "Account created.",
              status: "success",
              duration: 9000,
              isClosable: true,
            });

            localStorage.setItem('userData', JSON.stringify(formData));
            setFormData({ email: "", password: "" });
        } else {
            // Show a toast for incorrect inputs
            toast({
                title: "Signin Failed",
                description: "Please provide valid email and password.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }
    };

    return (
        <div className=' flex flex-col justify-center text-center'>
            <p className='font-bold font-3xl mt-20'>Create your account</p>
            <div className='m-2'>
                <p className='font-xl'>Not sure if you have an account?</p>
                <p className='font-xl'>Enter your email and we'll check for you.</p>
            </div>
            <form onSubmit={handleSubmit}>
                <p className='font-bold text '>Enter Email Address</p>
                <input className="border border-black m-1 h-[50px] w-[350px]" type="email" name="email" value={formData.email} onChange={handleChange} />
                <br />
                <p className='font-bold text '>Enter Password</p>
                <input className="border border-black m-1 h-[50px] w-[350px]" type="password" name="password" value={formData.password} onChange={handleChange} />
                <br />
                <button className="bg-violet-500 m-3 p-3 rounded-full w-[300px]" type="submit">Submit</button>
            </form>
            <p>Already a user<Link to="/Login"><span className='underline text-blue-600'> Click Here</span> </Link>to login</p>
            <div>
                <p className='font-xl'>Securing your personal information is our priority.</p>
                <p className='font-xl underline'>See our Privacy measures.</p>
            </div>
        </div>
    );
};
