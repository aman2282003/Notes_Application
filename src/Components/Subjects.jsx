import React from 'react'
import { Webdev } from './Webdev'
import { Dm } from './Dm'
import { Fcpit } from './Fcpit'
import { Python } from './Python'
export const Subjects = () => {
    return (
        <div className='my-[30px]'>
            <Webdev/>
            <Dm/>
            <Fcpit/>
            <Python/>
        </div>
    )
}
