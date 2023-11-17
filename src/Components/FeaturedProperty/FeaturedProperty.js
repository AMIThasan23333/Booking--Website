import React from 'react';
import './FeaturedProperty.css'
import useFetch from '../../Hooks/useFetch';
const FeaturedProperty = () => {

    const { data, loading, error } = useFetch("/hotels/countByType");


    return (
       
        <div className="fp">
        
        <div className="fpItem">
        <img className='fpImg' src="https://images.pexels.com/photos/2351649/pexels-photo-2351649.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" srcset="" />
            <span className="fpName">Star mystro</span>
            <span className="fpCity">Madrid</span>
            <span className="fpPrice">Starting from $123</span>
            <div className="fpRating">
               <button>8.9</button>
               <span>Excellent</span>
            </div>
        </div>

        <div className="fpItem">
        <img className='fpImg' src="https://images.pexels.com/photos/2351649/pexels-photo-2351649.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" srcset="" />

            <span className="fpName">Star mystro</span>
            <span className="fpCity">Madrid</span>
            <span className="fpPrice">Starting from $123</span>
            <div className="fpRating">
               <button>8.9</button>
               <span>Excellent</span>
            </div>
        </div>

        <div className="fpItem">
        <img className='fpImg' src="https://images.pexels.com/photos/2351649/pexels-photo-2351649.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" srcset="" />

            <span className="fpName">Star mystro</span>
            <span className="fpCity">Madrid</span>
            <span className="fpPrice">Starting from $123</span>
            <div className="fpRating">
               <button>8.9</button>
               <span>Excellent</span>
            </div>
        </div>


        <div className="fpItem">
        <img className='fpImg' src="https://images.pexels.com/photos/2351649/pexels-photo-2351649.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" srcset="" />

            <span className="fpName">Star mystro</span>
            <span className="fpCity">Madrid</span>
            <span className="fpPrice">Starting from $123</span>
            <div className="fpRating">
               <button>8.9</button>
               <span>Excellent</span>
            </div>
        </div>
        </div>
    );
};

export default FeaturedProperty;