import { Dispatch, SetStateAction, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { VscSymbolNamespace } from "react-icons/vsc";
import { MdAdminPanelSettings } from "react-icons/md";
import axios from "axios";



interface BuildPageProps {
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  }
  
const CreateRoom: React.FC<BuildPageProps> = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();

    const [roomName, setRoomName] = useState("");
    const [adminPassword, setAdminPassword] = useState("");


 useEffect(() =>{
    const token = localStorage.getItem("token");
     if(token){
      setIsLoggedIn(true);
    } else {
        navigate("/login");
    }
},[setIsLoggedIn, navigate]);
 
 

const handleCreateRoom = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()
 try {
  
 const response = await axios.post('http://localhost:3000/api/createRoom', {roomName,adminPassword } )
 console.log(response.data)

 } catch (error) {
  console.error(error)
 }

}
 
 
 
 
 
return (
  <>
    <main className="py-8 xs:text-center">
      <div className="">
        <h2 className="text-mainPink xs:font-semibold text-lg">Create Your Room</h2>   
      </div>    
      <div className="py-6 text-erorrs font-bold">
        <h2 className="text-lg">You will need Admin password!!!</h2>
        <h2 className="text-lg">Don't forget your room name!!!</h2>
      </div>
      <form onSubmit={handleCreateRoom}>
      <section className="py-8 flex justify-center">
        <div className="bg-dragMe w-64 h-64 py-4">
          
          <div className="py-4 flex justify-center items-center mr-4">
            <VscSymbolNamespace className="w-6 h-6 mr-1" />
            <input 
              type="text"
              onChange={(e) => setRoomName(e.target.value)}
              placeholder="Room Name"
              value={roomName}
              required
              className="text-center text-erorrs bg-navBar py-2 outline-none placeholder-custom"
            />
          </div>

          <div className="py-6 flex justify-center items-center mr-4">
            <MdAdminPanelSettings className="w-6 h-6 mr-1" />
            <input 
              type="password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              placeholder="Admin Password"
              required
              className="text-center text-erorrs bg-navBar py-2 outline-none placeholder-custom"
            />
          </div>

          <div className="py-4">
            <button
              type="submit"
              className="py-2 bg-mainPink text-textColor px-2"
            >
              Create Room </button>
          </div>

        </div>
      </section>
      </form>
    </main>
  </>
);
}

export default CreateRoom;