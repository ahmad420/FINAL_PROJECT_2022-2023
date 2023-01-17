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
        
            <i className="fa fa-user" aria-hidden="true" />
            Main Profile
          
        </Link>

        <Link to={"/user/update-profile"}>
        
          <i className="fa fa-wrench" aria-hidden="true" />
          Update User Profile
        
        </Link>

        <Link to={"/user/add-item"}>
       
          <i className="fa fa-plus" aria-hidden="true" />
          Add Item
        

        </Link>

        <Link to={"/user/items"}>
       
          <i className="fa fa-plus" aria-hidden="true" />
         Items
        

        </Link>

        <a onClick={handleLogout} >
          <i className="fa fa-star-o" aria-hidden="true"  />
          Logout
        </a>

      </aside>

    </div>
  );
}