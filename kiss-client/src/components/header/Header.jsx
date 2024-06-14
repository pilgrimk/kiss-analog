import React from 'react'

const Header = ({ title }) => {
  return (
    <div className='flex justify-center items-center w-full h-28 bg-header-bg bg-cover'>
      <p className='text-3xl md:text-5xl text-white font-outline-1 font-bold'>
        {title}
      </p>
    </div>
  )
}

export default Header