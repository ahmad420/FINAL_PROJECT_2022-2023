import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Navigate } from "react-router-dom";
import About from "../components/Home/About";
import Box from "../components/Home/Box";
import Card from "../components/Home/Card";
import CardList from "../components/Home/CardsList";

import "../style/Home.css";

const Home = () => {
  return (
    <div className="Main">
      <div className="landingpage">
        <Box />
        <About />
        <div className="auction">
          <div className="title">
            <p className="titlebold">Be Smart Servicse</p>

          </div>


          <div className="CardList"> <CardList /></div>

        </div>


        
      </div>

    </div>
  );
};

export default Home;
