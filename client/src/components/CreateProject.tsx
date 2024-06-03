

interface CreateProjectProps {
  memberInfo: {
    member: string;
    role: string;
    mission: string;
  };
}


const CreateProject: React.FC<CreateProjectProps> = ({ memberInfo }) => {
  console.log(memberInfo)

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
      <tbody className="">
        <tr>
        <td className="border border-gray-300 px-4 py-2">{memberInfo.member}</td>
        <td className="border border-gray-300 px-4 py-2">{memberInfo.role}</td>
        <td className="border border-gray-300 px-4 py-2">{memberInfo.mission}</td>
        </tr>
      </tbody>
     
    </table>
   </section>

   </>
  );
}

export default CreateProject;
