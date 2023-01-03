import React from "react";
import { Route, useNavigate, Routes } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Dashboard from "./Profile";
import Login from "./Login";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const Comp = currentUser ? <Dashboard /> : <Login />;

  return <Comp />;
}
