import React from 'react'
import Drop from '../Components/Drop'
import { ContentCard } from '../Components/ContentCard'
// import Show from '../Components/Show'

const Home = () => {
  return (
    <div className='mt-4 flex flex-col justify-center items-center text-slate-900'>
        <div className='w-full flex justify-end'>
            <Drop/>
        </div>
        <ContentCard/>    
        <ContentCard/>    
        <ContentCard/>    
        <ContentCard/>    
        
        {/* <Show/> */}
      
      
    </div>
  )
}

export default Home
