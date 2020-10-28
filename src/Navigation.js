import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(){
    return(
        <ul classname="nav">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/circuit-design">Circuit Design</Link>
            </li>
            <li>
                <Link to="/equipment-reviews">Equipment Reviews</Link>
            </li>
            <li>
                <Link to="/kiss-u">Kiss U</Link>
            </li>
            <li>
                <Link to="/channel">Channel</Link>
            </li>
            <li>
                <Link to="/blog">Blog</Link>
            </li>
        </ul>
    )
}

export default Navigation;