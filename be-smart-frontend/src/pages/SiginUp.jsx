import React, { useRef } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";

const SiginUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signUp } = useAuth();
  function handelSubmit(e) {
    e.preventDefault();
    signUp(emailRef.current.value, passwordRef.current.value);
  }
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sigin up </h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>

            <Form.Group id="password">
              <Form.Label>password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>

            <Form.Group id="password-confirm">
              <Form.Label>Confierm Password</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button className="w-100" type="submit">
              Sigin Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        alredy have an account ? Log In
      </div>
    </>
  );
};

export default SiginUp;
