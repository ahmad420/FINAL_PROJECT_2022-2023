import "./NavBar.css";

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
        <MDBNavbarBrand href="/">BeSmart </MDBNavbarBrand>
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
        <MDBCollapse navbar show={showNavText} style={{ textAlign: "center" }}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="/">
                {" "}
                <span className="text-lg-start">Home Page</span>{" "}
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              
              <MDBNavbarLink active aria-current="page" href="/contact-us">
                
                Contact Us
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="/pricing">
                Pricing
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <MDBNavbarLink active aria-current="page" href="/login">
            Login &nbsp;
            <MDBIcon far icon="user" />
          </MDBNavbarLink>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
