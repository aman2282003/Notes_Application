import React from 'react';
import { FaInstagram, FaWhatsapp, FaRegUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const Intro = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <div className='text-center'>
                <h1 className='sm:text-8xl text-6xl font-bold my-6 text-violet-500'>Welcome</h1>
                <p className='sm:text-6xl text-4xl mb-6'>to Aman's Code Tech Hub</p>
                <p className='sm:text-4xl text-2xl mb-6'>Discover the possibilities in the world of tech</p>
                <p className='text-xl mb-6 px-5'>Dive into the world of technology and creativity with our curated collection of study notes and resources. From mastering programming languages  to honing skills in graphic design and video editing, embark on a journey of continuous learning and innovation with us.</p>
                <p className='text-3xl mb-6 font-bold'>Join me in your Coding Journey now</p>
            </div>
            <div className="links flex justify-center flex-col">
                <Link to="/instagram" className="insta flex justify-center items-center p-4 rounded-lg  shadow-md hover:shadow-xl transition duration-300">
                    <FaInstagram className='h-[50px] w-[50px] m-2 text-pink-900' />
                    <p className='sm:text-3xl text-xl'>Instagram page :
                        <span className='text-violet-500'>
                            Click here to Join</span>
                    </p>
                </Link>
                <Link to="/whatsapp" className="whattsp flex justify-center items-center p-4 rounded-lg  shadow-md hover:shadow-xl transition duration-300">
                    <FaWhatsapp className='h-[50px] w-[50px] m-2 text-green-500' />
                    <p className='sm:text-3xl text-xl '>Whats'p channel :
                        <span className='text-violet-500'>
                            Click here to Join</span></p>
                </Link>
                <Link to="/portfolio" className="portfolio flex justify-center items-center p-4 rounded-lg  shadow-md hover:shadow-xl transition duration-300">
                    <FaRegUserCircle className='h-[50px] w-[50px] m-2 text-blue-600' />
                    <p className='sm:text-3xl text-xl'>Personal portfolio :
                        <span className='text-violet-500'>
                            Click here to See</span></p>
                </Link>
            </div>
        </div>
    )
}

export default Intro;