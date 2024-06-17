import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { data } from '../../constants';
import shortid from 'shortid'

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const toggleClick = () => setClick(!click);

  const popup =
    <div className='lg:hidden block absolute top-16 w-full
  z-50 left-0 right-0 bg-accent-dark-500 transition'>
      <ul className='text-center text-xl p-20'>
        {data.navlinks.map((navlink) => (
          <Link
            to={navlink.link_to}
            key={shortid.generate()}>
            <li className='my-4 py-4 border-b 
          hover:text-black
          border-accent-light-800 
          hover:bg-accent-light-500 
          hover:rounded cursor-pointer font-serif'
              onClick={() => setClick(false)}>
              {navlink.link_title}
            </li>
          </Link>
        ))}
      </ul>
    </div>

  useEffect(() => {
    function captureWindowWidth() {
      setWindowWidth(window.innerWidth)
      // console.log(window.innerHeight, window.innerWidth)
    }

    // Trigger this function on resize
    window.addEventListener('resize', captureWindowWidth)
    //  Cleanup for componentWillUnmount
    return () => window.removeEventListener('resize', captureWindowWidth)
  }, [])

  return (
    <nav className='sticky top-0 z-50 bg-gradient-to-r
    from-accent-light-500 to-accent-dark-500'>
      <div className='h-10vh flex justify-between text-white
      lg:py-5 py-4 px-20 border-accent-dark-800'>
        <div className='flex items-center flex-1'>
          <img src='/favicon-32x32.png' className="size-8" />
          <span className='text-3xl font-bold ml-8 text-white font-sans'>
            {(windowWidth > 600) ? `${data.contactUs.name_long} ` : `${data.contactUs.name_short}`}
          </span>
        </div>
        <div className='lg:flex md:flex lg:flex-1 justify-end font-normal hidden'>
          <div className='flex-10'>
            <ul className='flex gap-8 mr-16 text-[18px]'>
              {data.navlinks.map((navlink) => (
                <Link
                  to={navlink.link_to}
                  key={shortid.generate()}
                >
                  <li className='hover:text-black hover:border-b-2 
                  hover:border-accent-dark-600                  
                  transition cursor-pointer font-serif'>
                    {navlink.link_title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <div>
          {click && popup}
        </div>
        <button className='block md:hidden transition' onClick={toggleClick}>
          {click ? <FaTimes /> : <GiHamburgerMenu />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar