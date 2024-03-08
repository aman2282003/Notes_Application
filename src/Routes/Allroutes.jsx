import React from 'react'
import { Navbar } from '../Components/Navbar'
import { Intro } from '../Components/Intro'
import { Subjects } from '../Components/Subjects'
import Footer from '../Components/Footer'
export const Allroutes = () => {
  return (
    <div>
          <Navbar />
          <Intro />
          <Subjects/>
          <Footer/>
    </div>
  )
}
