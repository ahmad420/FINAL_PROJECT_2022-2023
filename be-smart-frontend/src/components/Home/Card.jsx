import React from "react";
import "./Cards.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
  MDBCardTitle,
} from "mdb-react-ui-kit";

export default function Card(props) {
  return (
    <MDBCard className="servicse" style={{ maxHeight: 450, padding: "2px" }}>
      <MDBCardImage
        style={{ maxHeight: "100px", maxWidth: "100px", alignSelf: "center" }}
        src={props.img}
        alt="..."
        position="top"
      />

      <MDBCardBody>
        <MDBCardTitle>{props.Name}</MDBCardTitle>
        <MDBCardText>{props.descrbtion}</MDBCardText>
      </MDBCardBody>
    </MDBCard>
  );
}
