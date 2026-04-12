import { useState } from "react";
import Sidebar from "../../Components/Sidebar";
import Users from "../../Components/Manager/Users";
import Courses from "../../Components/Manager/Courses";
import { Home } from "../Home/Home"; 
import Statistics from "../../Components/Manager/Statistics";

const ManagerDashboard = () => { 
  const [menu, setMenu] = useState(1);

  const rol = "admin"; // "admin", student", "instructor"

  return (
    <div className="flex">
      <Sidebar rol={rol} setMenu={setMenu} />

      <div className="flex-1 p-6 text-white ml-64">
        {menu === 1 && (
          <Home /> 
        )}
        {menu === 2 && (
          <>
            <Statistics />
          </>
        )}

        {menu === 3 && <Users />}
        {menu === 4 && <Courses />}

      </div>
    </div>
  );
};

export default ManagerDashboard;
