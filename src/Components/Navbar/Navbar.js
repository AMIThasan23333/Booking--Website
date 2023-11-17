import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
     
        <div className="navbar">
            <div className="navContainer">
            <Link  to="/"   style={{ textDecoration: "none", color: "white" }}>
                    <span className="logo">
                        Booking.com
                    </span>
                </Link>

                <div className="navItems">
         <button className="navbutton">  Register</button>
         <button className="navbutton"> Button  </button>
         </div>
            </div>
        </div>
     
    );
};

export default Navbar;