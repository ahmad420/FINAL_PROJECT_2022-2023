import "./Style/NavBar.css";

import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdb-react-ui-kit";

export default function NavBar() {
  const [showNavText, setShowNavText] = useState(false);

  return (
    <MDBNavbar expand="lg" className="navbar ">

      <MDBContainer fluid>
        <img
          id="logoImg"
          className="pulse"
          src={require("../../Images/BeSmart.png")}

        />
        
     
      
      <MDBNavbarBrand href="/" className="hoverTitle" >BeSmart</MDBNavbarBrand>
      <MDBNavbarToggler

        type="button"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => setShowNavText(!showNavText)}
      >
        <MDBIcon icon="bars" fas />
      </MDBNavbarToggler>
      <MDBCollapse navbar show={showNavText}>
        <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
          <MDBNavbarItem>
            <MDBNavbarLink active aria-current="page" href="/">

              <span className="hoverTitle">Home Page</span>{" "}
            </MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink active aria-current="page" href="/contact-us">

              <span className="hoverTitle"> Contact Us</span>{" "}
            </MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink active aria-current="page" href="/pricing">

              <span className="hoverTitle"> Pricing</span>{" "}
            </MDBNavbarLink>
          </MDBNavbarItem>
        </MDBNavbarNav>

        <MDBNavbarLink active aria-current="page" href="/login">

          <MDBIcon fas icon="user" />
        </MDBNavbarLink>
      </MDBCollapse>
    </MDBContainer>
    </MDBNavbar >
  );
}
