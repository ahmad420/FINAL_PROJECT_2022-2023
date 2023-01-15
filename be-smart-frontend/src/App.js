import React, { Fragment } from "react";
import Signup from "./pages/SiginUp";
import { Container, Navbar } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Profile";
import Login from "./pages/Login";
import PrivateRoute from "./pages/PrivateRoute";
import ForgotPassword from "./components/Profile/ForgotPassword";
import UpdateProfile from "./components/Profile/UpdateProfile";
import NavBar from "./components/Navigation&Footer/NavBar";
import Footer from "./components/Navigation&Footer/Footer";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";

import Admin from "./pages/Admin";
import AdminVisualData from "./pages/AdminVisualData";
import Aside from "./components/Profile/Aside";
import AddItem from "./pages/AddItem";

function App() {
  return (
    <>
      <NavBar />

      <div className="main-comp">
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/adminpage" element={<Admin />} />
              <Route path="/visualdata" element={<AdminVisualData />} />

              <Route path="/Aside" element={<Aside/>} />
              
              <Route  path="/user" element={<PrivateRoute />}>
                
                <Route  path="/user/profile" element={<Dashboard/>} />
                <Route path="/user/forgot-password" element={<ForgotPassword />} />
                <Route  path="/user/update-profile" element={<UpdateProfile />} />
                <Route  path="/user/add-item" element={<AddItem />} />

              </Route>

             
            </Routes>
          </AuthProvider>
        </Router>
      </div>

      <Footer />
    </>
  );
}

export default App;
