import React, { useContext, useState } from 'react';
import { FaHome, FaSearch } from "react-icons/fa";
import { AuthContext } from '../Context/Authcontext';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const { isAuth } = useContext(AuthContext);
    const [subject, setSubject] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Searching for:', subject);
    };

    return (
        <div className='flex  items-center justify-between px-[20px] py-[10px] dark:bg-gray-800'>
            <div className='hidden md:flex items-center'>
                <FaHome className='h-[40px] w-[40px] m-3 text-black ' />
                <p className='text-xl font-bold'>Home</p>
            </div>
            <div className='relative'>
                <form onSubmit={handleSubmit}>
                    <input
                        className="border border-violet-500 px-3 py-2 rounded-full w-[20px] md:w-[400px]"
                        placeholder="Search Subject"
                        type="text"
                        value={subject}
                        onChange={(e) => { setSubject(e.target.value) }}
                    />
                    <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <FaSearch className='h-[20px] w-[20px] ' />
                    </button>
                </form>
            </div>
            <div>
                <Link to="/signin">
                    <button className='text-2xl font-bold'>
                        {isAuth ? "Logout" : "SignIn"}
                    </button>
                </Link>
            </div>
        </div>
    );
}