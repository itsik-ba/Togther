import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useState} from "react";
import { PiPasswordLight } from "react-icons/pi"
import { VscSymbolNamespace } from "react-icons/vsc"
import { useNavigate } from "react-router-dom";



interface BuildPageProps {
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

const EnterRoom: React.FC<BuildPageProps> = ({ setIsLoggedIn }) => {
  
  const navigate = useNavigate();
  const [roomName, setRoomName] = useState('')
  const [roomPassword, setRoomPassword] = useState('')
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() =>{
    const token = localStorage.getItem("token");
     if(token){
      setIsLoggedIn(true);
    } else {
        navigate("/login");
    }
},[setIsLoggedIn, navigate]);
 


  const handleEnterRoom = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
     
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setMessage("No token found");
        return;
      }

      const response = await axios.post(
        'http://localhost:3000/api/enterRoom',
        { roomName, roomPassword },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setMessage(response.data.message);

      if (response.status === 200) {
        setTimeout(() => {
          navigate("/buildPage");
        }, 1000);
      } 
      
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage("An error occurred");
      }
      setRoomName("")
      setRoomPassword("")
    }
};


return (
    <>
    <main >
      <div className="py-10 text-center">
       <h2 className="text-erorrs font-bold text-xl">your about to enter a chat room</h2>
       <h2 className="text-erorrs font-bold text-xl">please watch your lang</h2>
      </div>
      <div className="text-center text-erorrs font-bold">
          <h2>{message}</h2>
        </div>
     <div className="py-10 flex justify-center">
      <section className=" py-10 bg-userName h-60 w-60">
      
     <form onSubmit={handleEnterRoom}>
       <div className="py-4 flex justify-center items-center mr-4">
       <VscSymbolNamespace className="w-6 h-6 mr-1 text-textColor" />
       <input 
       type="text"
       placeholder="room name"
       value={roomName}
       onChange={(e) => setRoomName(e.target.value)}
       required
       
       />
       </div>

       <div className="py-6 flex justify-center items-center mr-4">
       <PiPasswordLight className="w-6 h-6 mr-1 text-textColor" />
       <input 
       type="password"
       placeholder="room password"
       value={roomPassword}
       onChange={(e) => setRoomPassword(e.target.value)}
       required
       
       />
      </div>
      <div className="py-2 text-center">
        <button type="submit"
        className="py-1 bg-mainPink text-textColor px-2"
        >enter room</button>
      </div>
      </form>

      </section>
      </div>
    </main>
    </>
  )
}

export default EnterRoom