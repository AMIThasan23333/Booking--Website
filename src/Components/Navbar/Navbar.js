import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
     
        <div className="navbar">
            <div className="navContainer">
                <span className="logo">
                   Booking.com
                </span>
                <div className="navItems">
         <button className="navbutton">  Register</button>
         <button className="navbutton"> Button  </button>
         </div>
            </div>
        </div>
     
    );
};

export default Navbar;