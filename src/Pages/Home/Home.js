import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';
import Featured from '../Featured/Featured';
import './Home.css'
import PropertyList from '../../Components/PropertyList/PropertyList';
import FeaturedProperty from '../../Components/FeaturedProperty/FeaturedProperty';
import MailList from '../../Components/MailList/MailList';
import Footer from '../../Components/Footer/Footer';
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
          <MailList></MailList>
          <Footer></Footer>
          </div>
        </div>
    );
};

export default Home;