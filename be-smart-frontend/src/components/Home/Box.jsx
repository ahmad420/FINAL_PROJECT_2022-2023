import React from "react";
import { Button } from "react-bootstrap";
export default function Box() {
  return (
    <div className="box">
      <div className="infobox">
        <p className="infobox-boldtext">Warehouse Managent Software</p>
        <p className="infobox-slimtext">
          The WMS will benefit their operational efficiency for both labor and
          physical space by monitoring work processes at various levels,
          enhancing productivity, and increasing asset utilization. WMS
          automation assists with inventory control in a way that improves
          accuracy, throughput, and speed.
        </p>
        <div className="infobox-btnwrapper">
          <Button variant="light" className="infobox-createbtn">
            Pricing
          </Button>
        </div>
      </div>
      <div className="display">
        <img
          className="display-nft "
          src={require("../../Images/BeSmart.png")}
        />
      </div>
    </div>
  );
}
