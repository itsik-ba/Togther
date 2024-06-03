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


const CreateTeam: React.FC<CreateTeamProps> = ({ memberInfo, setMemberInfo }) => {



 const handleSubmitMember = () => {
  console.log(memberInfo)
 }




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
        value={memberInfo.member}
        onChange={(e) => setMemberInfo({ ...memberInfo, member: e.target.value })}
        placeholder="member name"
        className="bg-dragMe w-44 text-mainPink outline-0 font-semibold text-lg text-center p-1 placeholder-custom" />
      </div>
      
      <div>
        <input 
        type="text" 
        name="role"
        value={memberInfo.role}
        onChange={(e) => setMemberInfo({ ...memberInfo, role: e.target.value })}
        placeholder="role" 
        className="bg-dragMe w-44 text-textColor font-semibold text-lg outline-0 text-center placeholder-custom p-1" />
      </div>
 </div>

      <div className="w-screen flex justify-center py-4">
        <input 
        type="text"
        name="mission"
        value={memberInfo.mission}
        onChange={(e) => setMemberInfo({ ...memberInfo, mission: e.target.value })}
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
    

     </header>
    </main>
    </>
   
  )
}

export default CreateTeam