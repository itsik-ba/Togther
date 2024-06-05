import { useState } from "react";



interface MemberInfo {
    member: string;
    role: string;
    mission: string;
  }

interface CreateProjectProps {
  memberInfo: MemberInfo[];
}


const CreateProject: React.FC<CreateProjectProps> = ({ memberInfo }) => {
  
  const [droppedInfo, setDroppedInfo] = useState<{ field: string, value: string } | null>(null);




  const handleDrop = (e: React.DragEvent<HTMLTableSectionElement>) => {
    e.preventDefault();
    const data = JSON.parse(e.dataTransfer.getData('text/plain'));
    console.log('Dropped data:', data);
    setDroppedInfo(data);
  };


  const handleDragOver = (e: React.DragEvent<HTMLTableSectionElement>) => {
    e.preventDefault();
  };



  return (
    <>
    <main className="w-screen xs:text-center xs:py-8">
      <div>
      <h1 className="">Mission Creating...</h1>
      </div>
    </main>

    <section className="xs:w-screen xs:flex xs:justify-center">
    <table className="table-auto border-collapse border border-gray-300">
      <thead className="">
        <tr>
        <th className="border border-gray-300 px-10 py-2">Name</th>
        <th className="border border-gray-300 px-10 py-2">Role</th>
        <th className="border border-gray-300 px-10 py-2">Mission</th>
        </tr>
      </thead>
    
      {memberInfo.map((member, index) => (
          <tbody 
          className=""
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          >
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">{member.member}</td>
                <td className="border border-gray-300 px-4 py-2">{member.role}</td>
                <td className="border border-gray-300 px-4 py-2">{member.mission}</td>
              </tr>
              </tbody>
            ))}
    
     
    </table>
   </section>

      
 </>
  );
};

export default CreateProject;
