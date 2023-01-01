import React from "react";
import Signup from "./pages/SiginUp";
import { Container, Navbar } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Profile";
import Login from "./pages/Login";
import PrivateRoute from "./pages/PrivateRoute";
import ForgotPassword from "./pages/ForgotPassword";
import UpdateProfile from "./pages/UpdateProfile";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <NavBar />
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{}}>
          <Router>
            <AuthProvider>
              <Routes>
                <Route exact path="/profile" element={<PrivateRoute />}>
                  {/* <Route exact path="/profile" element={<Dashboard />} /> */}
                </Route>

                <Route exact path="/update-profile" element={<PrivateRoute />}>
                  {/* <Route
                    exact
                    path="/update-profile"
                    element={<UpdateProfile />}
                  /> */}
                </Route>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
              </Routes>
            </AuthProvider>
          </Router>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default App;
