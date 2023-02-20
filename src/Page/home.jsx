
import Drop from '../Components/Drop'
import { Link } from "react-router-dom";
// import Blog1 from "../Asset/4.jpeg";
// import { useState } from 'react';
// import { useEffect } from 'react';

// import Show from '../Components/Show'

const Home = ({blogs}) => {
  return (
    <>
    <div className='mt-4 flex flex-col justify-center items-center text-slate-900'>
        <div className='w-full flex justify-end'>
            <Drop/>
        </div>
        {/* {blogs && <p></p>} */}
        {
        ! blogs  ?<h1>Loading...</h1>:
        
        blogs.map((item) =>{
      return(
        <div className="flex flex-col gap-8 items-start w-full xl:flex-row lg:flex-row mt-8 hover:bg-indigo-50 p-6 rounded-xl duration-500">
      <div className="xl:w-1/2 lg:w-3/5">
        <img src={item.image} alt="aaaa" className="rounded-xl xl:w-full lg:w-full" />
      </div>
      <div className="xl:w-1/2 lg:lg:w-2/5 flex flex-col gap-3 ">
        <h1 className="text-slate-900 font-light text-xl xl:text-3xl leading-snug">
          {item.title}  </h1>
        <p className="text-xs text-slate-400 xl:text-sm">
          By
          <span className="text-slate-800"> {item.description.slice(0,200)}</span>
        </p>
        <h2>
          {item.description.slice(0,200)}
        </h2>
        <Link to={`${item._id}`}><button className="btn btn-primary">ViewMore</button></Link>
      </div>
    </div>
      )
    })}  
        
        {/* <Show/> */}
      
      
    </div>
    </>
  )
}

export default Home
