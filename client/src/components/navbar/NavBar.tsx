import { NavLink } from "react-router-dom";


const NavBar = () => {
  return (
    <nav className="flex justify-evenly sm:">
     <NavLink to="/">home</NavLink>
     <NavLink to="/about">about</NavLink>
     <NavLink to="/contact">contact</NavLink>
 
    </nav>
  )
}

export default NavBar