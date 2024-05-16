import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NavBar from "../components/navbar/NavBar";
import About from "../pages/Register";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import BuildPage from "../pages/BuildPage";



function AppRouter() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/buildPage" element={<BuildPage setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
    </div>
  );
}

export default AppRouter;
