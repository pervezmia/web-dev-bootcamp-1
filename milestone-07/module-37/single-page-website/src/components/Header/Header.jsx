import React from 'react';
import { Link, NavLink } from 'react-router';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h3>This is header</h3>
            <nav className=''>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Mobiles">Mobiles</NavLink>
                <NavLink to="/Laptops">Laptops</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/user2">Users2</NavLink>
            </nav>
        </div>
    );
};

export default Header;