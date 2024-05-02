import { MdOutlineMailOutline } from "react-icons/md"
import { RiLockPasswordLine } from "react-icons/ri"
import { Link } from "react-router-dom"


const Login = () => {
  return (
    <div className="py-32 h-screen flex justify-center">
    <div className="bg-navBar w-80 h-96 rounded-xl">
      <div className="flex justify-center bg-navBar2 rounded-xl rounded-b-none">
      <h2 className="text-textColor py-2 text-xl">Login</h2>
      </div>
      <div>
        <form action="" className="py-10">
         
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

           <div className="flex justify-center py-6">
            <button className="text-textColor bg-mainPink py-2 px-2">Login</button>
           </div>
          </form>
          
          <div className="flex justify-center text-textColor mt-[-22px]">
          <Link to="/forgot-password">forgot password</Link>
          </div>
          
      </div>
    </div>
  </div>
  )
}

export default Login