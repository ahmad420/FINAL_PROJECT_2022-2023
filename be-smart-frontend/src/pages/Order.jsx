import React, { useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { db } from "../utils/firebaseConfig";

export default function Order() {
  const [packge, setPackge] = useState("");
  const [companyName, setCompanyname] = useState("");
  const [address, setAdress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cardNum, setCardNum] = useState("");
  const [CardExpire, setCardExpire] = useState("");
  const [cvv, setCvv] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("Orders")

      .add({
        companyName: companyName,
        address: address,
        email: email,
        phone: phone,
        cardNum: cardNum,
        CardExpire: CardExpire,
        cvv: cvv,
        packge: packge,
      })
      .then(() => {
        setLoader(false);
        alert("Your Order has been Sent👍");
      })
      .catch(() => {
        alert("unable to sent your Order");
        setLoader(false);
      });

    setCompanyname("");
    setAdress("");
    setEmail("");
    setPhone("");
    setCardNum("");
    setCardExpire("");
    setCvv("");
    setPackge("");
  };

  return (
    <MDBContainer className="py-5" fluid>
      <MDBRow className=" d-flex justify-content-center">
        <MDBCol md="10" lg="8" xl="5">
          <form onSubmit={handleSubmit}>
            <MDBCard className="rounded-3">
              <MDBCardBody className="p-4">
                <div className="text-center mb-4">
                  <h3>Order Information</h3>
                </div>

                <MDBTypography tag="h3" className="mb-4">
                  <div className="form-group">
                    <h5 className="mb-2">Select Current Packge </h5>
                    <select
                      value={packge}
                      className="form-control"
                      onChange={(e) => setPackge(e.target.value)}
                      required
                    >
                      <option value="Basic">Basic</option>
                      <option value="Standart">Standart</option>
                      <option value="Premium">Premium</option>
                    </select>
                  </div>
                </MDBTypography>
                <MDBInput
                  wrapperClass="mb-4"
                  value={companyName}
                  onChange={(e) => setCompanyname(e.target.value)}
                  id="form6Example3"
                  label="Company name"
                  className="mb-4"
                  required
                />
                <MDBInput
                  wrapperClass="mb-4"
                  value={address}
                  onChange={(e) => setAdress(e.target.value)}
                  id="form6Example4"
                  label="Address"
                  required
                />
                <MDBInput
                  wrapperClass="mb-4"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="form6Example5"
                  label="Email"
                  required
                />
                <MDBInput
                  wrapperClass="mb-4"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  id="form6Example6"
                  label="Phone"
                  required
                />
                <div className="text-center mb-4">
                  <h3>Payment</h3>
                </div>
                <MDBTypography className="fw-bold mb-4">
                  {" "}
                  Paying for <span className="link-danger mx-2">
                    {packge}
                  </span>{" "}
                  Packge{" "}
                </MDBTypography>
                <p className="fw-bold mb-4">Card Information:</p>
                <MDBInput
                  label="Cardholder's Name"
                  id="form3"
                  type="text"
                  size="lg"
                  required
                />
                <MDBRow className="my-4">
                  <MDBCol size="7">
                    <MDBInput
                      label="Card Number"
                      id="form4"
                      type="text"
                      size="lg"
                      placeholder="3456 **** ***** 4576"
                      required
                      value={cardNum}
                      onChange={(e) => setCardNum(e.target.value)}
                    />
                  </MDBCol>
                  <MDBCol size="3">
                    <MDBInput
                      label="Expire"
                      id="form5"
                      type="text"
                      size="lg"
                      placeholder="MM/YYYY"
                      value={CardExpire}
                      onChange={(e) => setCardExpire(e.target.value)}
                      required
                    />
                  </MDBCol>
                  <MDBCol size="2">
                    <MDBInput
                      label="CVV"
                      id="form6"
                      type="text"
                      size="lg"
                      placeholder="CVV"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      required
                    />
                  </MDBCol>
                </MDBRow>
                <MDBBtn color="success" size="lg" type="submit" block>
                  Submit
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
