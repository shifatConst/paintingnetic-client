import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <nav style={{backgroundColor:"#fbe0c4"}} className="sticky-top nav-style">
            <ul className="nav nav-tabs justify-content-center">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about-us">About Us</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/dashboard">Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;