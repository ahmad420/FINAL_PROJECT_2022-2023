import React from "react";
import { useState } from "react";
import { app } from "../utils/firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  let auth = getAuth();
  const [data, setData] = useState({});

  const handleInput = (event) => {
    let newInput = { [event.target.name]: event.target.value };
    setData({ ...data, ...newInput });
  };

  const handleSubmit = () => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((response) => {
        console.log(response.user);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <>
      <div>
        <br />
        <label>
          email:
          <input
            type="email"
            name="email"
            onChange={(event) => handleInput(event)}
          />
        </label>
        <br />
        <label>
          password:
          <input
            type="password"
            name="email"
            onChange={(event) => handleInput(event)}
          />
        </label>{" "}
        <br />
        <button onClick={handleSubmit}>Log In</button>
      </div>
    </>
  );
};
export default Login;
