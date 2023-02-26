import React from "react";
import "./Style/Cards.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";

export default function Card(props) {
  return (
    <MDBCard className="servicse" >
      <MDBCardImage src={props.img} alt="..." position="top" />
      <MDBCardBody>
        <MDBCardText>{props.Name}</MDBCardText>
        <MDBCardText>{props.descrbtion}</MDBCardText>
      </MDBCardBody>
    </MDBCard>
  );
}
