import { useUser } from "@/hooks/useUser";
import Users from "../../components/Manager/Users";

const ManagerUsersPage = () => {

  const {users , fetchDeleteUser , isLoading} = useUser(); 
 
  return (
    // <div className="min-h-screen bg-[#060B16] px-6 py-6">
      <Users users={users} deleteUser={fetchDeleteUser} isLoading={isLoading}/>
    // </div>
  );
};

export default ManagerUsersPage;
