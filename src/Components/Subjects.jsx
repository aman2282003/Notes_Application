import React from 'react'
import { Webdev } from './Webdev'
import { Dm } from './Dm'
import { Fcpit } from './Fcpit'
import { Python } from './Python'
import { Dbms } from './Dbms'
import { Ds } from './Ds'
import { Ml } from './Ml'
import { Gd } from './Gd'
import { Gaming } from './Gaming'
import { Communication } from './Communication'
export const Subjects = () => {
    return (
        <div className='my-[30px]'>
            <Webdev />
            <Fcpit />
            <Python />
            <Dbms />
            <Communication />
            <Ds />
            <Ml />
            <Gd />
            <Gaming />

            <Dm />
        </div>
    )
}
