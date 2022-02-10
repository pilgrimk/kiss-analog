import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logout from './Logout'
import './Navbar.css'

function Navbar() {
    const user = true
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    KISS Analog 
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'} >
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/circuit-design' className='nav-links' onClick={closeMobileMenu}>
                            Circuit Design
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/blog' className='nav-links' onClick={closeMobileMenu}>
                            Blog
                        </Link>
                    </li>
                    {user && (
                        <li className='nav-item'>
                            <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
                                Login
                            </Link>
                        </li>
                    )}
                    {user && ( <Logout /> )}                           
                </ul>
            </nav>
        </>
    )
}

export default Navbar;