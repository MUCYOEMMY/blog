import {useNavigate} from 'react-router-dom'
import React from "react";
import { FaUser } from "react-icons/fa";
// import Dashbord from './Dashbord'
import {  useContext } from 'react';
import axios from 'axios';
import AuthContext from "../context/AuthProvider"
import { useForm } from 'react-hook-form';

const LOGIN_URL ="https://blogapi12.onrender.com/api/v1/signin"
const LoginPage = () => {
 useContext(AuthContext);
const {register ,handleSubmit } =  useForm({

})

const navigate  =  useNavigate();

const onSubmit = async (data) =>{    


  try {
    const response  = await   axios.post(LOGIN_URL,data);
    localStorage.setItem("token",response.data.token)
    navigate("/Dashbord");
  } catch (error) {
     console.log(error.response);
  }
}


  return (  
    <>

    <div className="w-full mt-4 flex justify-center items-center p-2">
      <fieldset className="w-1/2 bg-indigo-100 flex justify-center items-center rounded-2xl
        xl:w-1/2
        lg:w-1/2
        md:w-full
        sm:w-full
        xs:w-full
      ">
        <legend className="w-full">
          <center>
            <div className="bg-indigo-900 w-32 h-32 text-indigo-50 p-4 rounded-full flex justify-center items-center border-8 border-white">
              <FaUser className="text-6xl"/>
            </div>
          </center>
        </legend>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" 
        className="bg-indigo-100 w-full p-8 flex flex-col gap-5">
          <p style={{color:"red"}}></p>
          <div className="flex flex-col gap-2 group">
            <label htmlFor="email" className="text-indigo-900 text-lg  group-hover:font-semibold duration-500 space-x-4">Email</label>
            <input type="email"
            id='email'
            name='email'
            autoComplete="off"
            {...register("email")}
            required  
            className="border-indigo-300 border bg-indigo-100 text-indigo-900 px-8 py-3 rounded-lg outline-none"/>
          </div>
          <div className="flex flex-col gap-2 group">
            <label htmlFor="password" className="text-indigo-900 text-lg  group-hover:font-semibold duration-500 space-x-4">Password</label>
            <input type="password"
             id='password'
             name='password'
             {...register("password")}
             required  
            className="border-indigo-300 border bg-indigo-100 text-indigo-900 px-8 py-3 rounded-lg outline-none"/>
          </div>
          <div className="flex flex-col gap-2 group">

          <input type="submit" value="Signin"  className="border-indigo-300 border bg-indigo-900  text-indigo-50 px-8 py-3 rounded-lg outline-none cursor-pointer"/> 
           
          </div>
        </form>
      </fieldset>
       {/* <Dashbord /> */}
    </div>
    </>
  );
};

export default LoginPage;
