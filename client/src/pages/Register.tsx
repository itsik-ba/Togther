import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";


const Register = () => {
  return (
    <div className="py-32 h-screen flex justify-center">
      <div className="bg-navBar w-80 h-96 rounded-xl">
        <div className="flex justify-center bg-navBar2 rounded-xl rounded-b-none">
        <h2 className="text-textColor py-2 text-xl">register</h2>
        </div>
        <div>
          <form action="" className="py-6">
           
             <div className="py-6 flex justify-center gap-4">
             <FaRegUser className="w-6 h-6 text-textColor" />
            <input type="text" placeholder="Your Name" 
              className=""
              />
              </div>

             <div className="py-6 flex justify-center gap-4">
             <MdOutlineMailOutline className="w-6 h-6 text-textColor" />
              <input type="text" placeholder="Your Email" 
              className=""
              />
              </div>

             <div className="flex justify-center py-6 gap-4">
              <RiLockPasswordLine className="w-6 h-6 text-textColor" />
              <input type="text" placeholder="Your Password" 
              className=""
              />
             </div>
             <div className="flex justify-center py-4">
              <button className="text-textColor bg-mainPink py-1 px-1">Register</button>
             </div>
            </form>
            <div className="flex justify-center text-textColor mt-[-22px]">
            <Link to="/login">Move To Login</Link>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Register