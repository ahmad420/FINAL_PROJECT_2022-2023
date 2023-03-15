import React from "react";
import About from "../components/Home/About";
import Box from "../components/Home/Box";
import CardList from "../components/Home/CardsList";
import MapComp from "../components/Home/MapComp";


import "../style/Home.css";
import "../style/SiginUp-In.css";

const Home = () => {
  return (
    <div className="Main">
      <div className="landingpage">
        <Box />
        <div className="about">
        <About />
        </div>
        
       
        <div className="auction">
          <div className="title">
            <h1 className="titlebold">Be Smart Servicse</h1>
          </div>
          <div className="cardList">
            {" "}
            <CardList />
          </div>
        </div>
      </div>
      <MapComp />
    </div>
  );
};

export default Home;
