import { useState } from "react"
import "../index.css"





const CreateTeam = () => {

const [userInfo, setUserInfo] = useState({member:'' , role:'', mission:''})



  return (
    <>
    <main>
    <div className="text-center py-2">
  <h1>create your team</h1>
   </div> 

     <header className="py-6" >



<div className="flex justify-center gap-2">
       <div>
        <input 
        type="text"
        name="member"
        value={userInfo.member}
        placeholder="member name"
        className="bg-dragMe w-44 text-mainPink outline-0 font-semibold text-lg text-center p-1 placeholder-custom" />
      </div>
      
      <div>
        <input 
        type="text" 
        name="role"
        value={userInfo.role}
        placeholder="role" 
        className="bg-dragMe w-44 text-textColor font-semibold text-lg outline-0 text-center placeholder-custom p-1" />
      </div>
 </div>

      <div className="w-screen flex justify-center py-4">
        <input 
        type="text"
        name="mission"
        value={userInfo.mission}
        placeholder="mission"
        className="bg-dragMe w-44 text-textColor outline-0 
        text-center font-semibold text-lg placeholder-custom p-1"/>
        
      </div>

      <div className="text-center py-2">
      <button className="bg-mainPink py-1 px-2 text-textColor">add</button>
      </div>
    

     </header>
    </main>
    </>
   
  )
}

export default CreateTeam