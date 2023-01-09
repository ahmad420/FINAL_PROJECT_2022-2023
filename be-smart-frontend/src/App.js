import React, { Fragment } from "react";
import Signup from "./pages/SiginUp";
import { Container, Navbar } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Profile";
import Login from "./pages/Login";
import PrivateRoute from "./pages/PrivateRoute";
import ForgotPassword from "./pages/ForgotPassword";
import UpdateProfile from "./pages/UpdateProfile";
import NavBar from "./components/Navigation&Footer/NavBar";
import Footer from "./components/Navigation&Footer/Footer";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import ProfileAdmin from "./pages/ProfileAdmin";
import Admin from "./pages/Admin";
import AdminVisualData from "./pages/AdminVisualData";

function App() {
  return (
    <>
      <NavBar />

      <div className="main-comp">
        <Router>
          <AuthProvider>
            <Routes>
              <Route exact path="/profile" element={<PrivateRoute />}>
                {/* <Route exact path="/profile" element={<Dashboard />} /> */}
              </Route>

              <Route path="/admin" element={<PrivateRoute />} />

              <Route exact path="/profile" element={<PrivateRoute />} />
              <Route exact path="/profileAdmin" element={<ProfileAdmin />} />

              <Route exact path="/update-profile" element={<UpdateProfile />} />
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/adminpage" element={<Admin />} />
              <Route path="/visualdata" element={<AdminVisualData />} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>

      <Footer />
    </>
  );
}

export default App;
