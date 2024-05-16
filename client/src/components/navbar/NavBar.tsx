import { NavLink, useNavigate } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { TiLockClosedOutline } from "react-icons/ti";
import { MdOutlineContactMail } from "react-icons/md";
import { SlLogout } from "react-icons/sl";
import { IoIosCreate } from "react-icons/io";
import { FaWallet } from "react-icons/fa6";

interface NavBarProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}



const NavBar: React.FC<NavBarProps> = ({ isLoggedIn, setIsLoggedIn }) => {
  
  const navigate = useNavigate(); 

  const handleLogOut = () => {
    setIsLoggedIn(false); 
      navigate("/login");
  }




return (
     <nav className="flex justify-evenly bg-navBar2 text-textColor py-4 font-semibol text-lg sticky top-0 z-10">
      
  {!isLoggedIn ? (

        <><div className="flex items-center">
          <MdOutlineContactMail className="w-6 h-6" />
          <NavLink to="/contact" className="ml-2">Contact</NavLink>
        </div><div className="flex items-center">
            <CiHome className="w-6 h-6" />
            <NavLink to="/" className="ml-2">Home</NavLink>
          </div><div className="flex items-center">
            <TiLockClosedOutline className="w-6 h-6" />
            <NavLink to="/register" className="ml-2">Register</NavLink>
          </div></> 

) : (
    
          <><div className="flex items-center">
            <IoIosCreate className="w-6 h-6" />
            <NavLink to="/contact" className="ml-2">Create Project</NavLink>
          </div>
          
          <div className="flex items-center">
              <FaWallet className="w-6 h-6" />
              <NavLink to="/all-projects" className="ml-2">All Projects</NavLink>
            </div>
            
            <div className="flex items-center">
              <SlLogout className="w-6 h-6" />
              <button
                className="ml-2"
                onClick={handleLogOut}
              >LogOut</button>
            </div></>

) }
     

</nav>

  )
};

export default NavBar