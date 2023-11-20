import React from 'react';
import './FeaturedProperty.css'
import useFetch from '../../Hooks/useFetch';
const FeaturedProperty = () => {

    const { data, loading, error } = useFetch("/hotels?featured=true");


    return (
       
        <div className="fp">
      {

        loading  ?  "loading" : 
        
        <>       
      {
        data.map((item ) => (
            <div className="fpItem">
            <img className='fpImg' src={item.photos[0]} alt="" srcset="" />
                <span className="fpName">{item.name}</span>
                <span className="fpCity">{item.city}</span>
                <span className="fpPrice">Starting Price ${item.cheapestPrice}</span>
            
            {
                item.rating &&       

            <div className="fpRating">
                <button>{item.rating}</button>
                <span>Excellent</span>
            </div>
            }
            </div>
        ))
      }
        </>
      }

      
        </div>
    );
};

export default FeaturedProperty;