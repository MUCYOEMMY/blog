import React from 'react'
import {GrHomeRounded} from 'react-icons/gr'
// import {FaBars} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Hamburger from './Hamburger'

export const Header = () => {
  return (
    <div className='bg-indigo-100 text-indigo-900 p-4 rounded-xl flex justify-between items-center'>
        <Link to="/" className='text-2xl font-extrabold'>
            Blogspot
        </Link>
        <ul className='flex gap-4'>
            <Link to="/" className='flex justify-center items-center py-2 px-6 duration-300 hover:bg-indigo-200 rounded-lg'>
                    <GrHomeRounded/>
            </Link>
            
            <div className='flex gap-1
             hidden
             xs:hidden
             sm:hidden
             md:block
             xl:block
             '>
                <Link to="/" className='bg-indigo-500 text-white font-medium text-lg py-2 px-6 rounded-l-lg'>
                    Logout
                </Link>
                {/* <Link to="/register" className='bg-indigo-900 text-white font-medium text-lg py-2 px-6 rounded-r-lg'>
                    Register
                </Link> */}
            </div>
            <div className='flex justify-center items-center'>
                <Hamburger/>
            </div>
        </ul>
    </div>
  )
}
