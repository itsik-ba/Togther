import { NavLink } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { TiLockClosedOutline } from "react-icons/ti";
import { MdOutlineContactMail } from "react-icons/md";

const NavBar = () => {
  return (
    <nav className="flex justify-evenly bg-navBar2 text-textColor py-4 font-semibol text-lg sticky top-0 z-10">

      <div className="flex items-center">
      <MdOutlineContactMail className="w-6 h-6" />
      <NavLink to="/contact" className="ml-2">Contact</NavLink>
     </div>

   <div className="flex items-center">
   <CiHome className="w-6 h-6" />
   <NavLink to="/" className="ml-2">Home</NavLink>
  </div>
  
  <div className="flex items-center">
   <TiLockClosedOutline className="w-6 h-6" />
    <NavLink to="/register" className="ml-2">Register</NavLink>
   </div>
   
 
    </nav>
  )
}

export default NavBar