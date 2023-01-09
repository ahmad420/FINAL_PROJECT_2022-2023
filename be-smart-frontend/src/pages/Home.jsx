import React from "react";
import { Carousel, Nav } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { Navigate } from "react-router-dom";
import Card from "../components/Home/Card";
import CardList from "../components/Home/CardsList";

import "../style/Home.css";

const Home = () => {
  return (
    <div className="Main">
      <div className="landingpage">
        <div className="box">
          <div className="infobox">
            <p className="infobox-boldtext">
              Warehouse
              Managent Software
            </p>
            <p className="infobox-slimtext">
              The WMS will benefit their operational efficiency for both labor and physical space by monitoring work processes at various levels, enhancing productivity, and increasing asset utilization. WMS automation assists with inventory control in a way that improves accuracy, throughput, and speed.
            </p>
            <div className="infobox-btnwrapper">

              <button className="infobox-createbtn">Pricing</button>
            </div>
          </div>
          <div className="display">
            <img className="display-nft" src={require("../Images/BeSmart.png")} />

          </div>
        </div>
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
