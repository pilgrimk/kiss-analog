import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Register.css';

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        // prevent default refresh of the page
        e.preventDefault();
        setError(false);

        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`,
                {
                    username,
                    email,
                    password
                }
            );

            res.data && window.location.replace("/login");
        }
        catch (err) {
            console.log(err);
            setError(true);
        }
    };

    return (
        <div className="register">
            <span className="register-title">Register</span>
            <form className="register-form" onSubmit={handleSubmit}>
                <label>UserName</label>
                <input className="register-input"
                    type="text"
                    placeholder="Enter your username..."
                    onChange={(e) => setUsername(e.target.value)} />
                <label>Email</label>
                <input className="register-input"
                    type="text"
                    placeholder="Enter your email..."
                    onChange={(e) => setEmail(e.target.value)} />
                <label>Password</label>
                <input className="register-input"
                    type="password"
                    placeholder="Enter your password..."
                    onChange={(e) => setPassword(e.target.value)} />
                <button className="register-button" type="submit">Register</button>
            </form>
            <button className="register-login-button">
                <Link className='link' to='/login'>Login</Link>
            </button>
            {error && <span className="error-message">Registration failed, something went wrong!</span>}
        </div>
    );
}
