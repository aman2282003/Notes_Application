import React, { useState } from 'react';
import { useContext } from "react";
import { AuthContext } from '../Context/Authcontext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'



export const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const name = useNavigate()


    const { isAuth, setisAuth } = useContext(AuthContext);



    function handleSubmit(e) {
        e.preventDefault();
        const { email, password } = formData;
        const storedData = JSON.parse(localStorage.getItem('userData')) || {};


        if (storedData.email === email && storedData.password === password) {

            localStorage.setItem("isAuth", "Authenticated")
            console.log("Done")
            setisAuth(true);
            console.log(isAuth)
            name("/")


        } else {

            console.log("Not done")
        }
        setFormData({ email: "", password: "" });
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };








    return (
        <div className=' flex flex-col justify-center text-center'>
            <p className='font-bold font-xl mt-20 mb-5'>Enter your Credentials</p>
            <form onSubmit={handleSubmit}>
                <p className='font-bold text '>Enter Email Address</p>
                <input className="border border-black m-1 h-[50px] w-[350px]" onChange={handleChange} value={formData.email} type="email" name="email" />
                <br />
                <p className='font-bold text '>Enter Password</p>
                <input className="border border-black m-1 h-[50px] w-[350px]" onChange={handleChange} value={formData.password} type="password" name="password" />
                <br />
                <button className="bg-violet-500 m-3 text-white p-3 rounded-full w-[300px]" type="submit">Submit</button>
                <p>Not a user<Link to="/Signin"><span className='underline text-blue-600'>Click Here</span> </Link>to Signup</p>
            </form>
            <div>
                <p className='font-xl'>Securing your personal information is our priority.</p>
                <p className='font-xl'>See our Privacy measures.</p>
            </div>
        </div>
    );
};