import React from 'react';
import './Featured.css';
import useFetch from '../../Hooks/useFetch';
const Featured = () => {

    
    

    const  {data, loading, error, refetch}  = useFetch("/hotels/countByCity?cities=Berlin,Madrid,London")


     console.log(data)



    return (

  <div className="featured">

  {
    loading ? ("loading pleas wait")  : (

        <>

          <div className="featuredItem">
        <img src="https://th.bing.com/th/id/OIP.oPY7YsfmvUFubtYkdoNOHgHaEK?pid=ImgDet&rs=1" className='featuredimg' alt="" srcset="" />
        <div className="featuredTitles">
            <h1>Berlin {data[0]} properties</h1>
           
        </div>
    </div>

    <div className="featuredItem">
        <img src="https://th.bing.com/th/id/OIP.oPY7YsfmvUFubtYkdoNOHgHaEK?pid=ImgDet&rs=1" alt=""  className='featuredimg' srcset="" />
        <div className="featuredTitles">
            <h1>Madrid {data[1]} properties </h1>
        
        </div>
    </div>

    <div className="featuredItem">
        <img src="https://th.bing.com/th/id/OIP.oPY7YsfmvUFubtYkdoNOHgHaEK?pid=ImgDet&rs=1" alt="" className='featuredimg' srcset="" />
        <div className="featuredTitles">
            <h1>London {data[2]} properties</h1>
          
        </div>
    </div>

        
        </>

    )
  }

  </div>

    );
};

export default Featured;