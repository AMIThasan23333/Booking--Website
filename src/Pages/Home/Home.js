import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';
import Featured from '../Featured/Featured';
import './Home.css'
const Home = () => {
    return (
        <div>
          <Navbar></Navbar>
          <Header></Header>
          <div className="homeContainer">
            <Featured></Featured>
            <Featured></Featured>
            <Featured></Featured>
          </div>
        </div>
    );
};

export default Home;