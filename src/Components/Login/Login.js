import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import './Login.css'
import { AuthContext } from "../../Context/AuthContext";

const Login = () => {

  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });


  const {user,  loading, error, dispatch } = useContext(AuthContext);
console.log(user)

  const navigate = useNavigate()

  
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };


  return (
/*     <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button disabled={loading} onClick={handleClick} className="lButton">
          Login
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div> */

    <div className=' flex justify-center items-center h-screen'>
    <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
        <div className="">
            <h1 className='text-center text-white text-xl mb-4 font-bold'>Signup</h1>
        </div>
        <div>
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                      
        />
        </div>

        <div>
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
        />
        </div>
       
        <div className=' flex justify-center mb-3'>
            <button
               onClick={handleClick}
                className=' bg-red-500 w-full text-white font-bold  px-2 py-2 rounded-lg'>
                Signup
            </button>
        </div>
        <div>
            <h2 className='text-white'> Don't Have an account <Link className=' text-red-500 font-bold' to={'/signup'}>Sign Up</Link></h2>
        </div>
    </div>
</div>
  );
};

export default Login;