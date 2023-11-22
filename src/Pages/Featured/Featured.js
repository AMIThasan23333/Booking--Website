import React from 'react';
import './Featured.css';
import useFetch from '../../Hooks/useFetch';
const Featured = () => {

    
    

    const  {data, loading, error, refetch}  = useFetch("/hotels/countByCity?cities=Miami,Munich,Berlin,Madrid,London,  Kuala Lumpur," )


    console.log(data)

   



    return (

  <div className="featured">

  {
    loading ? ("loading please wait")  : (

        <>
          {data.map((cityData, index) => (
            <div key={index} className="featuredItem">
              <img
                src="https://th.bing.com/th/id/OIP.oPY7YsfmvUFubtYkdoNOHgHaEK?pid=ImgDet&rs=1"
                className="featuredimg"
                alt=""
              />
              <div className="featuredTitles">
              <h1>{cityData.city} {cityData.count} properties</h1>
              </div>
            </div>
          ))}
        </>

    )
  }

  </div>

    );
};

export default Featured;