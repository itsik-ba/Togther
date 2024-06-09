import { Dispatch, SetStateAction, useEffect } from "react";
import { useNavigate } from "react-router-dom";


interface BuildPageProps {
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  }
  


const CreateRoom: React.FC<BuildPageProps> = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();

 useEffect(() =>{
    const token = localStorage.getItem("token");
     
    if(token){
      setIsLoggedIn(true);
    } else {
        navigate("/login");
    }
},[setIsLoggedIn, navigate]);
 
 
 
 
 
 
 
    return (
    <main className=" h-screen
    xs:text-center xs:py-8
    ">
     <div className="">
     <h2 className="text-mainPink xs:font-semibold">Create Your Room</h2>   
     </div>    
     <div className="py-4 text-erorrs font-bold">
        <h2>you will need Admin password</h2>
        <h2>dont forget your room name!!!</h2>
     </div>
     <section className="py-20 justify-center">
      <div className="bg-dragMe text-center xs:w-20" >
asda
      </div>
     </section>
    </main>
  )
}

export default CreateRoom