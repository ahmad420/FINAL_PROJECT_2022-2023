import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

import "./Aside.css"


export default function Aside() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div className="MainAside" >
      <aside className="Aside">
        <p > Menu </p>

        <Link to={"/user/profile"}>
          <a href="#" >
            <i className="fa fa-user" aria-hidden="true" />
            Main Profile
          </a>
        </Link>

        <Link to={"/user/update-profile"}>
        <a href="#">
          <i className="fa fa-wrench" aria-hidden="true" />
          Update User Profile
        </a>
        </Link>

        <Link to={"/user/add-item"}>
        <a href="#" >
          <i className="fa fa-plus" aria-hidden="true" />
          Add Item
        </a>

        </Link>

        <a onClick={handleLogout} >
          <i className="fa fa-star-o" aria-hidden="true" />
          Logout
        </a>

      </aside>

    </div>
  );
}