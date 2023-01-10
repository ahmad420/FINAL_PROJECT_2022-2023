import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Admin from "./Admin";
import Dashboard from "./Profile";

export default function PrivateRoute() {
  const { currentUser } = useAuth();
  
  return( 
     currentUser?<Outlet/>: <Navigate to={"/login"} />
  )
  
  
  
}
