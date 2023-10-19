import React from 'react';
import './Featured.css';
const Featured = () => {
    return (

  <div className="featured">

    <div className="featuredItem">
        <img src="https://th.bing.com/th/id/OIP.oPY7YsfmvUFubtYkdoNOHgHaEK?pid=ImgDet&rs=1" className='featuredimg' alt="" srcset="" />
        <div className="featuredTitles">
            <h1>Dublin</h1>
            <h2>123 Properties</h2>
        </div>
    </div>

    <div className="featuredItem">
        <img src="https://th.bing.com/th/id/OIP.oPY7YsfmvUFubtYkdoNOHgHaEK?pid=ImgDet&rs=1" alt=""  className='featuredimg' srcset="" />
        <div className="featuredTitles">
            <h1>Dublin</h1>
            <h2>123 Properties</h2>
        </div>
    </div>

    <div className="featuredItem">
        <img src="https://th.bing.com/th/id/OIP.oPY7YsfmvUFubtYkdoNOHgHaEK?pid=ImgDet&rs=1" alt="" className='featuredimg' srcset="" />
        <div className="featuredTitles">
            <h1>Dublin</h1>
            <h2>123 Properties</h2>
        </div>
    </div>


  </div>

    );
};

export default Featured;