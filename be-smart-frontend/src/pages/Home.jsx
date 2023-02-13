import React from "react";
import About from "../components/Home/About";
import Box from "../components/Home/Box";
import CardList from "../components/Home/CardsList";

import "../style/Home.css";
import "../style/SiginUp-In.css";

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

          <div className="CardList">
            {" "}
            <CardList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
