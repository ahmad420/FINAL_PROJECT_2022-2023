import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Aside from "../components/Profile/Aside";
import "../style/Profile.css"
import ProfieCard from "../components/Profile/ProfileCard";

export default function Dashboard() {


  return (
    
      <ProfieCard />
  );
}
