import React, { useContext } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';

const Navbar = () => {

    

  const {user,  loading, error, dispatch } = useContext(AuthContext);
  
  console.log(user)

  const handleLogout  = ()  => {

    dispatch({ type: "LOGOUT" });
  }


    return (
     
        <div className="navbar">






            <div className="navContainer">


            <div>
     <Link  to="/"   style={{ textDecoration: "none", color: "white" }}>
                    <span className="logo">
                        Booking.com
                    </span>
                </Link>
        </div>

            {
  user ? (
    <div  className="navItems">
      <button className="navbutton"> {user?.username}</button>
      <button onClick={handleLogout} className="navbutton"> LogOut </button>
    </div>
  ) : (
    <div className="navItems">
      <Link   to="/register" ><button className="navbutton">Register</button></Link>
      <Link  to="/login" > <button className="navbutton">Login</button> </Link>
    </div>
  )
}

            </div>



        </div>
     
    );
};

export default Navbar;