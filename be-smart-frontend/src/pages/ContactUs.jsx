import React, { useState } from "react";
import { db } from "../utils/firebaseConfig";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTextArea,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")

      .add({
        name: name,
        email: email,
        message: message,
        companyName: companyName,
        phoneNumber: phoneNumber,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch(() => {
        alert("unable to sent your message");
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
    setCompanyName("");
    setPhoneNumber("");
  };

  return (
    <div>
      <MDBContainer className="py-5" style={{ maxWidth: "1100px" }}>
        <MDBRow className="justify-content-center align-items-center">
          <MDBCol>
            <MDBCard className="my-4 shadow-3">
              <MDBRow className="g-0">
                <MDBCol md="6" className="d-xl-block bg-image">
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Others/extended-example/delivery.webp"
                    alt="Sample photo"
                    fluid
                  />
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
                  >
                    <div className="justify-content-center align-items-center h-100">
                      <div
                        className="text-center"
                        style={{ marginTop: "220px" }}
                      >
                        <MDBIcon
                          fas
                          icon="fas fa-envelope-open-text"
                          size="4x"
                        />
                        <br />
                        <span className="text-white title-style">
                          BeSmart Team Contact{" "}
                        </span>
                        <p className="text-white mb-0"></p>

                        <figure className="text-center mb-0">
                          <blockquote className="blockquote text-white">
                            <p className="pb-3">
                              <MDBIcon
                                fas
                                icon="quote-left text-primary"
                                size="xs"
                                style={{ color: "hsl(210, 100%, 50%)" }}
                              />
                              <span className="lead font-italic">
                                Evearything For Your Comfort .
                              </span>
                              <MDBIcon
                                fas
                                icon="quote-right text-primary"
                                size="xs"
                                style={{ color: "hsl(210, 100%, 50%)" }}
                              />
                            </p>
                          </blockquote>
                        </figure>
                      </div>
                    </div>
                  </div>
                </MDBCol>
                <MDBCol md="6">
                  <MDBCardBody className="p-md-5 text-black">
                    <form onSubmit={handleSubmit}>
                      <MDBTypography tag="h3" className="mb-4 text-uppercase">
                        Contact with Us Easly{" "}
                      </MDBTypography>

                      <MDBInput
                        label="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mb-4"
                        type="text"
                        size="lg"
                        required
                      />

                      <MDBInput
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="mb-4"
                        size="lg"
                        required
                      />

                      <MDBInput
                        label="Company Name"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        type="text"
                        className="mb-4"
                        size="lg"
                        required
                      />

                      <MDBInput
                        label="Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        type="text"
                        className="mb-4"
                        size="lg"
                        required
                      />

                      <MDBTextArea
                        label="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        type="text"
                        className="mb-4"
                        size="lg"
                        required
                      />

                      <div className="d-flex justify-content-center pt-3">
                        <MDBBtn
                          type="submit"
                          size="lg"
                          className="ms-2"
                          style={{
                            background: loader ? "#ccc" : " rgb(2, 2, 110)",
                          }}
                        >
                          Send Message
                        </MDBBtn>
                      </div>
                    </form>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
