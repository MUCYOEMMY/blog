import React from 'react'

const Show = () => {
  return (
    <div className='fixed bottom-0 right-0 bg-indigo-500'>
      <button className='hidden xl:block lg:hidden md:hidden sm:hidden'>Xlarge</button>
      <button className='hidden xl:hidden lg:block md:hidden sm:hidden'>large</button>
      <button className='hidden xl:hidden lg:hidden md:block sm:hidden'>Medium</button>
      <button className='hidden xl:hidden lg:hidden md:hidden sm:block'>Small</button>
      <button className='block xl:hidden lg:hidden md:hidden sm:hidden'>Xsmall</button>
    </div>
  )
}

export default Show
