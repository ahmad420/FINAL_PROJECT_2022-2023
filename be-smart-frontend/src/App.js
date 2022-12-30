import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import SiginUp from "./pages/SiginUp";
import { AuthProvider } from "./contexts/AuthContext";

// import Footer from "./components/Footer";
// import NavBar from "./components/NavBar";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <NavBar />
        <Home />
        <Footer />
        <SiginUp />
      </AuthProvider>
    </div>
   )}


export default App;


    /* <NavBar />
    <BrowserRouter basename={"/"}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SiginUp />} />
      </Routes>
    </BrowserRouter>

    <Footer /> */
  
  

