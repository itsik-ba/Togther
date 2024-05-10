import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


interface Errors {
  username?: string;
  email?: string;
  password?: string;
  userRegister?: string;
}

interface UserData {
  success?: any;
  username: string;
  email: string;
  password: string;
}


const Register = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<Errors>({});
  const [data, setData] = useState<UserData>(
    {
     username:'', 
     email:'',
     password:'',
    });
 

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const newErrors: Errors = {
        username: "",
        email: "",
        password: ""
      };

      if (data.username.trim() === "") {
      newErrors.username = "Please enter a username";
    }

    if (data.email.trim() === "") {
      newErrors.email = "Please enter an email";
    }

    if (data.password.trim() === "") {
      newErrors.password = "Please enter a password";
    }
       setErrors(newErrors);
    
       const response = await axios.post<UserData>("http://localhost:3000/api/register", data);
        
       if(response.data && response.data.success ){
        const responseData = response.data;

        setData(responseData);
        console.log(responseData);

        i

        } else {
        console.log("user registration successful");
        setErrors({});
        navigate("/login");

             } 
    }

      } catch (error) {
      console.error(error);
    }
  }



  return (
    <div className="py-32 h-screen flex justify-center">
      <div className="bg-navBar w-80 h-96 rounded-xl">
        <div className="flex justify-center bg-navBar2 rounded-xl rounded-b-none">
        <h2 className="text-textColor py-2 text-xl">register</h2>
        </div>
        <div>

          <form onSubmit={handleRegister} className="py-4">

          {errors.username && <p className="text-center text-erorrs">{errors.username}</p>}
          {errors.email && <p className="text-center text-erorrs">{errors.email}</p>}
          {errors.password && <p className="text-center text-erorrs">{errors.password}</p>}
          {errors.userRegister && <p className="text-center text-erorrs">{errors.userRegister}</p>}

             <div className="py-4 flex justify-center gap-4">
             <FaRegUser className="w-6 h-6 text-textColor" />
            <input 
              type="text" 
              placeholder="Your Name" 
              value={data.username}
              onChange={(event) => setData({...data, username:event.target.value})}
              className=""
              />
                </div>

             <div className="py-5 flex justify-center gap-4">
             <MdOutlineMailOutline className="w-6 h-6 text-textColor" />
              <input 
              type="text" 
              placeholder="Your Email" 
              value={data.email}
              onChange={(event) => setData({...data, email:event.target.value})}
              className=""
              />
              </div>

             <div className="flex justify-center py-5 gap-4">
              <RiLockPasswordLine className="w-6 h-6 text-textColor" />
              <input 
              type="text" 
              placeholder="Your Password" 
              value={data.password}
              onChange={(event) => setData({...data, password:event.target.value})}
              className=""
              />
            </div>

             <div className="flex justify-center py-3">
              <button 
              type="submit"
              className="text-textColor bg-mainPink py-1 px-1">Register</button>
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