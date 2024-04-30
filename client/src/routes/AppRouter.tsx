import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import NavBar from "../components/navbar/NavBar"
import About from "../pages/Register"
import Contact from "../pages/Contact"


function AppRouter() {
  return (
    <div>
        <NavBar />
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/register" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
        </Routes>
    </div>
  )
}

export default AppRouter