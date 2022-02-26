import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
import { Context } from '../context/Context';
import './Navbar.css'

function Navbar() {
    const { user } = useContext(Context);
    const [isMenu, setisMenu] = useState(false);
    const { dispatch } = useContext(Context);
    const [isResponsiveclose, setResponsiveclose] = useState(false);

    const toggleClass = () => {
        setisMenu(isMenu === false ? true : false);
        setResponsiveclose(isResponsiveclose === false ? true : false);
    };

    let boxClass = ["main-menu menu-right menuq1"];
    if (isMenu) {
        boxClass.push('menuq2');
    } else {
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);

    const toggleSubmenu = () => {
        setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };

    const handleLogOut = (e) => {
        toggleClass();
        dispatch({ type: "LOGOUT" });
    };

    let boxClassSubMenu = ["sub__menus"];
    if (isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    } else {
        boxClassSubMenu.push('');
    }

    return (
        <header className="header_middle">
            <div className="container">
                <div className="header_row">

                    {/* Add Logo  */}
                    <div className="header_middle_logo">
                        <NavLink to="/">
                            Kiss Analog
                        </NavLink>
                    </div>

                    <div className="header__middle__menus">
                        <nav className="main-nav " >

                            {/* Responsive Menu Button */}
                            {isResponsiveclose === true ? <>
                                <span className="menubar__button"
                                    style={{ display: 'none' }}
                                    onClick={toggleClass} >
                                    <FiXCircle />
                                </span>
                            </> : <>
                                <span className="menubar__button"
                                    style={{ display: 'none' }}
                                    onClick={toggleClass} >
                                    <FiAlignRight />
                                </span>
                            </>
                            }

                            <ul className={boxClass.join(' ')}>
                                <li className="menu-item" >
                                    <NavLink onClick={toggleClass} to={`/`}> Home
                                    </NavLink>
                                </li>
                                <li onClick={toggleSubmenu}
                                    className="menu-item sub__menus__arrows" >
                                    <NavLink to="#"> Blogs
                                        <FiChevronDown />
                                    </NavLink>
                                    <ul className={boxClassSubMenu.join(' ')} >
                                        <li>
                                            <NavLink onClick={toggleClass}
                                                to={`/blogs`}> Blog Posts
                                            </NavLink>
                                        </li>
                                        {user && (
                                            <li><NavLink onClick={toggleClass}
                                                to={`/write`}> Write
                                            </NavLink>
                                            </li>
                                        )}
                                    </ul>
                                </li>
                                {user && (
                                    <li className="menu-item " >
                                        <NavLink onClick={toggleClass}
                                            to={`/settings`}> Settings
                                        </NavLink>
                                    </li>
                                )}
                                {!user ? (
                                    <li className="menu-item" >
                                        <NavLink onClick={toggleClass}
                                            to={`/login`}> Login
                                        </NavLink>
                                    </li>
                                ) : (
                                    <li className="menu-item">
                                        <NavLink onClick={handleLogOut}
                                            to={`/`}> Logout
                                        </NavLink>
                                    </li>
                                )}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar;