import "./App.css";
// import Footer from "./components/Footer";
// import NavBar from "./components/NavBar";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Login from "./pages/Login";
import SiginUp from "./pages/SiginUp";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <SiginUp />
    </AuthProvider>
    /* <NavBar />
    <BrowserRouter basename={"/"}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SiginUp />} />
      </Routes>
    </BrowserRouter>

    <Footer /> */
  );
}

export default App;
