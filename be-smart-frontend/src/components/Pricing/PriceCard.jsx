import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import "./PriceCard.css"

export default function PriceCard(props) {
  return (
    <>

      


        <div className="cardContainer">


          <div className="priceCrad">
            <div className="title">
              <i className={props.logo} id="priceCardIcon" aria-hidden="true" />
              <h2>{props.Name}</h2>
            </div>
            <div className="price">
              <h4><sup>$</sup>{props.Price}</h4>
            </div>
            <div className="option">
              <ul>
                <li><i className="fa fa-check" aria-hidden="true" />{props.space}</li>
                <li><i className="fa fa-check" aria-hidden="true" />{props.admin}</li>
                <li><i className="fa fa-check" aria-hidden="true" />20 Email Address</li>
                <li><i className="fa fa-check" aria-hidden="true" />Live Support</li>
              </ul>
            </div>
            <div className='orderContainer'>
              <a  id="aOrder" href="#">
                <span id='orderSpan'>Order</span>
                <i />
                </a>
            </div>

          </div>
        </div>




      
    </>
  );
}