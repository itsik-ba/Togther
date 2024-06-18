import { MdOutlineMailOutline } from "react-icons/md"
import { useState } from 'react';
import axios from 'axios';
import { MdOutlinePassword } from "react-icons/md";


const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


const handleSubmit = async (event:any)=>{
  event.preventDefault();
 try {
  const response = await axios.post('/api/reset-password', { email });
  setMessage(response.data.message);

 } catch (error:any) {
  setMessage(error.response.data.message);
 }
}

return (
    <div className="py-32 flex justify-center">
    <div className="bg-navBar2 w-80 h-96 rounded-xl">
      <div className="flex justify-center bg-mainPink rounded-xl rounded-b-none">

        <div className="flex w-100 items-center gap-4 "> 
          <MdOutlinePassword className="w-6 h-6 text-textColor" />
      <h2 className="text-textColor py-2 text-xl">Password Reset</h2>
      </div>
     
      </div>

      <div>
        <form onSubmit={handleSubmit} className="py-16">
         
        <div className="py-6 flex justify-center gap-4">
             <MdOutlineMailOutline className="w-6 h-6 text-textColor" />
              <input
               type="email" placeholder="Your Email" 
               value={email}
               onChange={(event)=> setEmail(event.target.value)}
              />
              </div>

         <div className="flex justify-center py-6">
            <button className="text-textColor bg-mainPink py-2 px-2">Send Email</button>
           </div>
          </form>
          {message && <p>{message}</p>}
        </div>
    </div>
  </div>
  )
}

export default ForgotPassword