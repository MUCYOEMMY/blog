import React from 'react'
import { FaUser } from 'react-icons/fa'
import {Link} from 'react-router-dom'
export const RegisterPage = () => {
  return (
    <div className="w-full mt-4 flex justify-center items-center p-2">
      <fieldset className="w-1/2 bg-indigo-100 flex justify-center items-center rounded-2xl
        xl:w-1/2
        lg:w-1/2
        md:w-full
        sm:w-full
        xs:w-full
      "
        
      >
        <legend className="w-full">
          <center>
            <div className="bg-indigo-900 w-32 h-32 text-indigo-50 p-4 rounded-full flex justify-center items-center border-8 border-white">
              <FaUser className="text-6xl"/>
            </div>
          </center>
        </legend>
        <form action="" className="bg-indigo-100 w-full p-8 flex flex-col gap-5">
          <div className="flex flex-col gap-2 group">
            <label htmlFor="" className="text-indigo-900 text-lg  group-hover:font-semibold duration-500 space-x-4">Username</label>
            <input type="text" className="border-indigo-300 border bg-indigo-100 text-indigo-900 px-8 py-3 rounded-lg outline-none"/>
          </div>
          <div className="flex flex-col gap-2 group">
            <label htmlFor="" className="text-indigo-900 text-lg  group-hover:font-semibold duration-500 space-x-4">Email</label>
            <input type="email" className="border-indigo-300 border bg-indigo-100 text-indigo-900 px-8 py-3 rounded-lg outline-none"/>
          </div>
          <div className="flex flex-col gap-2 group">
            <label htmlFor="" className="text-indigo-900 text-lg  group-hover:font-semibold duration-500 space-x-4">Password</label>
            <input type="password" className="border-indigo-300 border bg-indigo-100 text-indigo-900 px-8 py-3 rounded-lg outline-none"/>
          </div>
          <div className="flex flex-col gap-2 group">
          <Link to="/login"><input type="submit" value="Signup" className="border-indigo-300 border bg-indigo-900  text-indigo-50 px-8 py-3 rounded-lg outline-none cursor-pointer"/>
          </Link> 
          </div>
        </form>
      </fieldset>
    </div>
  )
}
