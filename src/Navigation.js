import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div className="nav">
            <div className="nav_left">
                <h1>KISS<img class="sine" src="favicon.ico"></img>Analog</h1>
            </div>
            <div className="nav_right">
                <ul>
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
            </div>
        </div>
    )
}

export default Navigation;