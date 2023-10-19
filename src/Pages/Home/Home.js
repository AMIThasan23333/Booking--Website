import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';
import Featured from '../Featured/Featured';
import './Home.css'
import PropertyList from '../../Components/PropertyList/PropertyList';
import FeaturedProperty from '../../Components/FeaturedProperty/FeaturedProperty';
const Home = () => {
    return (
        <div>
          <Navbar></Navbar>
          <Header></Header>
          <div className="homeContainer">
            <Featured></Featured>
          
          <h1 className="hometitle">Browse by Property Types</h1>
          <PropertyList></PropertyList>
          <h1 className="hometitle">Homes  Guests Loved </h1>
          <FeaturedProperty></FeaturedProperty>
          </div>
        </div>
    );
};

export default Home;