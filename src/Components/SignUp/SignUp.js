import { useContext, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2'
function SignUp() {


    const { user, loading, error, dispatch } = useContext(AuthContext);
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleClick = async () => {
        try {
            const response = await axios.post('/auth/register', formData);
    console.log(response)
            // Check if response.data is defined before accessing its properties
            if (response.data) {
                console.log("in responr ",response.data)
                navigate('/login')
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your Can login now ",
                    showConfirmButton: false,
                    timer: 1500
                  });
                
            }
        } catch (error) {
            // Log the error to the console for debugging
            console.error('Error during signup:', error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                 text : `${error}`,
               
              });
       
            // Handle the error or dispatch an appropriate action

        }
    };
    
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='bg-gray-800 px-10 py-10 rounded-xl'>
                <div className="">
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Signup</h1>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="username"
                        id="username"
                        onChange={handleChange}
                        className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                    />
                </div>
                <div>
                    <input
                        type="email"
                        placeholder="email"
                        id="email"
                        onChange={handleChange}
                        className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="password"
                        id="password"
                        onChange={handleChange}
                        className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                    />
                </div>
                <div className='flex justify-center mb-3'>
                    <button
                        onClick={handleClick}
                        className='bg-red-500 w-full text-white font-bold px-2 py-2 rounded-lg'>
                        Signup
                    </button>
                </div>
                <div>
                    <h2 className='text-white'>Have an account <Link className='text-red-500 font-bold' to={'/login'}>Login</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default SignUp;
