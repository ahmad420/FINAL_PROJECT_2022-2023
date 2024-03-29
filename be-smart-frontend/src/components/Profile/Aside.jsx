import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

import "./Style/Aside.css";

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
    <div className="MainAside">
      <aside className="Aside">
        <p> Menu </p>

        <Link to={"/user/profile"}>
          <i className="fa fa-user" aria-hidden="true" />
          Main Profile
        </Link>

        <Link to={"/user/update-profile"}>
          <i className="fa fa-wrench" aria-hidden="true" />
          Update User Profile
        </Link>

        <Link to={"/user/add-item"}>
          <i className="fa fa-list-ul" aria-hidden="true" />
          Items
        </Link>

        <Link to={"/user/items"}>
          <i className="fa fa-plus" aria-hidden="true" />
          Edit Items Quantity
        </Link>

        <Link>
          <a onClick={handleLogout}>
            <i className="fa fa-sign-out" aria-hidden="true" />
            Logout
          </a>
        </Link>
      </aside>
    </div>
  );
}
