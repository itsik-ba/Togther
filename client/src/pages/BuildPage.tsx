import { Dispatch, SetStateAction, useEffect } from "react";
import { useNavigate } from "react-router-dom";


// interface NavBarProps {
//   isLoggedIn: boolean;
// }


interface BuildPageProps {
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}


const BuildPage: React.FC<BuildPageProps> = ({ setIsLoggedIn }) => {

  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    // Check if the token exists
    if (token) {
      // If the token exists, set isLoggedIn to true
      setIsLoggedIn(true);
    } else {
      // If the token doesn't exist, navigate to the login page
      navigate("/login");
    }
  }, [setIsLoggedIn, navigate]);


  return (
    <>
     
      <h1>buildPage</h1>
      <div className="py-32 h-screen flex justify-center">
        <h2>asfasfdas</h2>
        <h2>asfasfdas</h2>
       
      </div>
    </>
  );
}

export default BuildPage;
