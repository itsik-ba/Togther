import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateProject from "../components/CreateProject";
import CreateTeam from "../components/CreateTeam";
import { io } from "socket.io-client";



interface BuildPageProps {
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}


const BuildPage: React.FC<BuildPageProps> = ({ setIsLoggedIn }) => {

  const navigate = useNavigate();
  const currentDate = new Date();
  const [username, setUsername] = useState<string | null>(null);
   
  
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
      
      const decodedToken = decodeToken(token)!;
      setUsername(decodedToken.email);

    } else {
      navigate("/login");

    }
    
    const socket = io('http://localhost:3000');

    socket.on('connect', () => {
      console.log('Connected to server with id:', socket.id);
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    // Clean up the connection when the component is unmounted
    return () => {
      socket.disconnect();
    };
    
  }, [setIsLoggedIn, navigate]);


  const decodeToken = (token: string): { [key: string]: any } | null => {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error("Invalid token", error);
      return null;
    }
  };


  return (
    <>
       <div>
           <h2>Hello <span>{username}</span></h2>
           <p>{currentDate.toLocaleString()}</p>
        </div>
       
          <section className="w-screen
          xs:py-28 xs:h-screen xs:justify-center 
          lg:py-48 lg:flex 
          ">
         
           <div>
            <CreateTeam />
           </div>

           <div className="">
            <CreateProject />
           </div>

          </section>
          
    </>
  
  );
}

export default BuildPage;
