
import React from "react";
import { Route,Routes, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Dashboard from "./Profile";

export default function PrivateRoute() {

  // var currentUserEmail = firebase.auth().currentUser.email;
 

  return (
    <>
   
    <Dashboard></Dashboard>
    </>
  );
}
