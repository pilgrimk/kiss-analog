import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return(
        <>
        <nav className='navbar'>
            <Link to='/' className='navbar-logo'>
                KISS<img class="sine" src="favicon.ico" alt="sine wave"></img>Analog
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
                    <Link to='/equipment-review' className='nav-links' onClick={closeMobileMenu}>
                        Equipment Review
                    </Link>
                </li>                                           
            </ul>
        </nav>
        </>
    )
}

export default Navbar;