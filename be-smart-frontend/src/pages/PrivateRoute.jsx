import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Admin from "./Admin";
import Dashboard from "./Profile";

export default function PrivateRoute() {
  const { currentUser } = useAuth();
  // const { userType, setUserType } = useState(true);
  if (currentUser === true) {
    return <Admin />;
  }
  return currentUser ? <Dashboard /> : <Navigate to={"/login"} />;
}
