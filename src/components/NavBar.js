import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <nav>
                <ul id='nav-bar-links'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>

                    <ul id='logins'>
                        <li>
                            <Link to='/signup'>Signup</Link>
                        </li>
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                    </ul>
                </ul>
            </nav>
        </>
    );
};

export default NavBar;
