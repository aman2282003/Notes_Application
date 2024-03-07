import React from 'react'
import { Webdev } from './Webdev'
import { Dm } from './Dm'
import { Fcpit } from './Fcpit'
import { Python } from './Python'
import { Dbms } from './Dbms'
import { Ds } from './Ds'
export const Subjects = () => {
    return (
        <div className='my-[30px]'>
            <Webdev/>
            <Dm/>
            <Fcpit/>
            <Python/>
            <Dbms/>
            <Ds/>
        </div>
    )
}
