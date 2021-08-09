import React from 'react'
import './Navbar.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <ul id="heading">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/registration">Registration</NavLink></li>
                <li><NavLink to="/logout">Logout</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar
