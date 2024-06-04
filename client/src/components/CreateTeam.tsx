import { useState } from "react";
import "../index.css"



interface MemberInfo  {
    member: string;
    role: string;
    mission: string;
  }

  interface CreateTeamProps {
     setMemberInfo: React.Dispatch<React.SetStateAction<MemberInfo[]>>;
    }


const CreateTeam: React.FC<CreateTeamProps> = ({ setMemberInfo }) => {
    
  const [localInfo, setLocalInfo] = useState<MemberInfo>({ member: '', role: '', mission: '' });
  const [errors, setErrors] = useState('');

 const handleSubmitMember = () => {

  try {
  if(!localInfo.role || !localInfo.member || !localInfo.mission){
    throw new Error("Please fill out all fields");
  } else{
    setMemberInfo(prev => [...prev, localInfo]);
    setLocalInfo({ member: '', role: '', mission: '' });
    setErrors(""); 
  } 
  } catch (error:any) {
    console.error(error.message);
    setErrors(error.message);
  }
  
 }




  return (
    <>
    <main className="sticky">
    <div className="text-center py-2">
      <h1>create your team</h1> 
   </div> 

     <header className="py-6" >



<div className="flex justify-center gap-2">
       <div>
        <input 
        
        type="text"
        name="member"
        value={localInfo.member}
        onChange={(e) => setLocalInfo({ ...localInfo, member: e.target.value })}
        placeholder="member name"
        className="bg-dragMe w-44 text-mainPink outline-0 font-semibold text-lg text-center p-1 placeholder-custom" />
      </div>
      
      <div>
        <input 
        type="text" 
        name="role"
        value={localInfo.role}
        onChange={(e) => setLocalInfo({ ...localInfo, role: e.target.value })}
        placeholder="role" 
        className="bg-dragMe w-44 text-textColor font-semibold text-lg outline-0 text-center placeholder-custom p-1" />
      </div>
 </div>

      <div className="w-screen flex justify-center py-4">
        <input 
        type="text"
        name="mission"
        value={localInfo.mission}
        onChange={(e) => setLocalInfo({ ...localInfo, mission: e.target.value })}
        placeholder="mission"
        className="bg-dragMe w-44 text-textColor outline-0 
        text-center font-semibold text-lg placeholder-custom p-1"/>
        
      </div>

      <div className="text-center py-2">
      <button 
      type="submit"
      onClick={handleSubmitMember}
      className="bg-mainPink py-1 px-2 text-textColor">add</button>
      </div>

    <div className="text-center py-3">
      {errors ? <h1 className="text-erorrs">{errors}</h1> : null}      
    </div>

     </header>
   
    </main>
    </>
   
  )
}

export default CreateTeam