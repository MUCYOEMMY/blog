import './App.css';
import Home from './Page/home';
import { Layout } from './Components/Layout';
import {Route, Routes} from 'react-router-dom';
import LoginPage from './Page/LoginPage';
import ChartsDashboard from './Page/chartsDashboard';
import Dashbord from './Page/Dashbord';
import { RegisterPage } from './Page/RegisterPage';
import CreateBlog from './Page/CreateBlog';
import SingleBlog from './Page/SingleBlog';
import {useState, useEffect} from "react";
import axios from 'axios';

import React from 'react';
import { data } from 'autoprefixer';
// import Chart  from './Page/Charts';

function App()  {

  const [blogs, setBlogs] =  useState([]);

  const fetchBlogs = async () => {
    try{
    const response = await axios.get('https://blogapi12.onrender.com/api/v1/getAllBlogs');
    console.log(response);
    setBlogs (response.data.blogs);
  } catch (error){
   console.log(error.response)
  }
}
 useEffect(()=> {
  fetchBlogs();
 },[])
  console.log (blogs)
  return (
      <div className="w-screen py-2 px-3 xs:py-2 xs:px-3 sm:py-3 sm:px-6 lg:py-4 lg:px-10 xl:py-4 xl:px-12 mb-12 bg-white">
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home  blogs={blogs}/>}/>
            <Route path={'/Login'} element={<LoginPage/>}/>
            <Route path={'/Register'} element={<RegisterPage/>}/>
            <Route path={'/home'} element={<Home blogs={blogs}/>}/>
            <Route path={'/Dashbord'} element={<Dashbord blogs={blogs}/>}/>
            <Route path={'/blogCreate'} element={<CreateBlog/>}/>
            <Route path={'/:blogId'} element={<SingleBlog blogs={blogs}/>}/>
            <Route path={'/Charts'} element={<ChartsDashboard/>}/>
          </Route>
        </Routes>
      </div>
  );
}

export default App;
