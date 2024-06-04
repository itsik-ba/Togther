import { useState } from "react";
import "../index.css"


interface CreateTeamProps {
  memberInfo: {
    member: string;
    role: string;
    mission: string;
  };
  setMemberInfo: React.Dispatch<React.SetStateAction<{
    member: string;
    role: string;
    mission: string;
  }>>;
}


const CreateTeam: React.FC<CreateTeamProps> = ({ setMemberInfo }) => {
  const [localInfo, setLocalInfo] = useState({ member: '', role: '', mission: '' });
  const [errors, setErrors] = useState('');



 const handleSubmitMember = () => {
 try {
  if(!localInfo.role || !localInfo.member || !localInfo.mission){
    throw new Error("Please fill out all fields");
  } else{
    setMemberInfo(localInfo);
    setLocalInfo({ member: '', role: '', mission: '' }); 
    setErrors(""); 
  } 
 } catch (error:any) {
    console.error(error.message);
    setErrors(error.message);
  }
};

const handleDragStart = (e: React.DragEvent<HTMLInputElement>, field: string) => {
  e.dataTransfer.setData('text/plain', JSON.stringify({ field, value: localInfo[field as keyof typeof localInfo] }));
  e.dataTransfer.effectAllowed = 'move';
};


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
        autoComplete="off"
        type="text"
        name="member"
        value={localInfo.member}
        onChange={(e) => setLocalInfo({ ...localInfo, member: e.target.value })}
        placeholder="member name"
        className="bg-dragMe w-44 text-mainPink outline-0 font-semibold text-lg text-center p-1 placeholder-custom"
        draggable
        onDragStart={(e) => handleDragStart(e, 'member')}
       />
      </div>
      
      <div>
        <input 
        autoComplete="off"
        type="text" 
        name="role"
        value={localInfo.role}
        onChange={(e) => setLocalInfo({ ...localInfo, role: e.target.value })}
        placeholder="role" 
        className="bg-dragMe w-44 text-textColor font-semibold text-lg outline-0 text-center placeholder-custom p-1"
        draggable
        onDragStart={(e) => handleDragStart(e, 'role')}
        />
      </div>
 </div>

      <div className="w-screen flex justify-center py-4">
        <input 
        autoComplete="off"
        type="text"
        name="mission"
        value={localInfo.mission}
        onChange={(e) => setLocalInfo({ ...localInfo, mission: e.target.value })}
        placeholder="mission"
        className="bg-dragMe w-44 text-textColor outline-0 
        text-center font-semibold text-lg placeholder-custom p-1"
        draggable
        onDragStart={(e) => handleDragStart(e, 'mission')}
        
        />
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