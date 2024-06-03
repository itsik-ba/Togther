import "../index.css"


const CreateTeam = () => {
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
        placeholder="member name"
        className="bg-dragMe w-44 text-textColor outline-0 font-semibold text-lg text-center placeholder-custom " />
      </div>
      
      <div>
        <input 
        type="text" 
        placeholder="role" 
        className="bg-dragMe w-44 text-textColor font-semibold text-lg outline-0 text-center placeholder-custom " />
      </div>
 </div>

      <div className="sm:py-5">
        <input 
        type="text"
        placeholder="mission"
        className="bg-dragMe w-44 text-textColor outline-0 
        text-center font-semibold text-lg placeholder-custom"/>
        
      </div>

      <div className="text-center py-2">
      <button className="bg-mainPink py-1 px-2">add</button>
      </div>
    

     </header>
    </main>
    </>
   
  )
}

export default CreateTeam