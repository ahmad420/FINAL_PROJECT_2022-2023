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
import AddItem from "./components/Profile/AddItem";
import Items from "./components/Profile/Items";
import ProudctsContext from "./contexts/ProudctsContext";
import ContactUs from "./pages/ContactUs";
import Order from "./pages/Order";

function App() {
  return (
    <>
      <NavBar />

      <div className="main-comp">
        <Router>
          <AuthProvider>
            <ProudctsContext>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/adminpage" element={<Admin />} />
                <Route path="/visualdata" element={<AdminVisualData />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/order" element={<Order />} />
                <Route path="/Aside" element={<Aside />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />

                <Route path="/user" element={<PrivateRoute />}>
                  <Route path="/user/profile" element={<Dashboard />} />
                  <Route
                    path="/user/update-profile"
                    element={<UpdateProfile />}
                  />
                  <Route path="/user/add-item" element={<AddItem />} />
                  <Route path="/user/items" element={<Items />} />
                </Route>
              </Routes>
            </ProudctsContext>
          </AuthProvider>
        </Router>
      </div>

      <Footer />
    </>
  );
}

export default App;
