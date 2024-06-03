import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateProject from "../components/CreateProject";
import CreateTeam from "../components/CreateTeam";



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
       <div className="xs:py-4 flex justify-around">
           <h2>Hello <span>{username}</span></h2>
           <p>{currentDate.toLocaleString()}</p>
        </div>
       
          <div className="w-screen h-screen py-24 text-center
           sm:p-32 sm:justify-center flex-wrap "
            >
         
           <div>
            <CreateTeam />
           </div>

           <div>
            <CreateProject />
           </div>
          </div>
          
    </>
  
  );
}

export default BuildPage;
