import React, { useContext } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
const Navbar = () => {

    
  const { user } = useContext(AuthContext);

  console.log(user)


    return (
     
        <div className="navbar">
            <div className="navContainer">
            <Link  to="/"   style={{ textDecoration: "none", color: "white" }}>
                    <span className="logo">
                        Booking.com
                    </span>
                </Link>

     {
         user ? user.username :  (
            <div className="navItems">
            <button className="navbutton">  Register</button>
            <button className="navbutton"> Button  </button>
            </div>
        )
     }
            </div>
        </div>
     
    );
};

export default Navbar;