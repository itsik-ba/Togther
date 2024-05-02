import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import NavBar from "../components/navbar/NavBar"
import About from "../pages/Register"
import Contact from "../pages/Contact"
import Login from "../pages/Login"
import ForgotPassword from "../pages/ForgotPassword"


function AppRouter() {
  return (
    <div>
        <NavBar />
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/register" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/forgot-password" element={<ForgotPassword/>} />
        </Routes>
    </div>
  )
}

export default AppRouter