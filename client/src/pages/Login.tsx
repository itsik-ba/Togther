import axios from "axios"
import { Dispatch, SetStateAction, useState } from "react"
import { MdOutlineMailOutline } from "react-icons/md"
import { RiLockPasswordLine } from "react-icons/ri"
import { Link, useNavigate } from "react-router-dom"


type Errors = {
  email?: string,
  password?: string,
}

interface LoginProps {
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

const Login: React.FC<LoginProps> = ({setIsLoggedIn}) => {
  
   const navigate = useNavigate();
   const [errors, setErrors] = useState<Errors>({});
   const [data, setData] = useState({
  email:'',
  password:'',
})


const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
 e.preventDefault()
 try {

 const response = await axios.post('http://localhost:3000/api/login', data)
 
   console.log(response.data);

   setData({
    email: '',
    password: '', 
  })

  localStorage.setItem('token', response.data.token);
    setIsLoggedIn(true);
    navigate("/buildPage");
   

 } catch (error) {
  console.error(error)
  if ((error as any).response && (error as any).response.data) {
    setErrors({ ...((error as any).response.data) });
  } else {
    console.error("Unknown error occurred");
  }
 }
}


 return (
    <div className="py-32 h-screen flex justify-center">
    <div className="bg-navBar w-80 h-96 rounded-xl">
      <div className="flex justify-center bg-navBar2 rounded-xl rounded-b-none">
      <h2 className="text-textColor py-2 text-xl">Login</h2>
      </div>
     
      <div>

      {errors && (errors.email || errors.password) && (
            <p className="text-erorrs text-center p-2">
              {errors.email || errors.password}
            </p>
          )}

        <form onSubmit={handleLogin} className="py-10">
         
        <div className="py-4 flex justify-center gap-4">
             <MdOutlineMailOutline className="w-6 h-6 text-textColor" />
              <input 
              type="email" 
              placeholder="Your Email" 
              value={data.email}
              onChange={(e)=> setData({...data, email:e.target.value})}
              className=""
              />
              </div>

         <div className="flex justify-center py-4 gap-4">
            <RiLockPasswordLine className="w-6 h-6 text-textColor" />

            <input 
            type="password" 
            placeholder="Your Password" 
            value={data.password}
            onChange={(e) => setData({...data, password:e.target.value})}
            className=""
            />
           </div>

           <div className="flex justify-center py-6">
            <button 
            type="submit"
            className="text-textColor bg-mainPink py-2 px-2">Login</button>
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