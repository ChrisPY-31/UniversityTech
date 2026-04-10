import React from "react";  
import { 
  FaHome, 
  FaChartLine, 
  FaUsers, 
  FaFolder, 
  FaChartBar,
  FaBook,
  FaCertificate,
  FaBell,
  FaChalkboardTeacher,
  FaSignOutAlt
} from "react-icons/fa";

const Sidebar = ({ rol, setMenu }) => {
  return (
    <div className="w-64 h-screen fixed bg-[#0B0F19] p-5 flex flex-col fix justify-between">
      <div>
        <ul className="space-y-3">
          {rol === "admin" && (
            <>
              <li
                onClick={() => setMenu(1)}
                className="cursor-pointer hover:bg-[#1A2238] p-2 rounded flex items-center gap-3"
              >
                <FaHome className="text-[#00E5FF]" />
                Inicio
              </li>
              <li
                onClick={() => setMenu(2)}
                className="cursor-pointer hover:bg-[#1A2238] p-2 rounded flex items-center gap-3"
              >
                <FaChartLine className="text-[#00E5FF]" /> 
                Dashboard
              </li>
              <li
                onClick={() => setMenu(3)}
                className="cursor-pointer hover:bg-[#1A2238] p-2 rounded flex items-center gap-3"
              >
                <FaUsers className="text-[#00E5FF]" />
                Usuarios
              </li>
              <li
                onClick={() => setMenu(4)}
                className="cursor-pointer hover:bg-[#1A2238] p-2 rounded flex items-center gap-3"
              >
                <FaFolder className="text-[#00E5FF]" />
                Categorías
              </li>
              
            </>
          )}

          {rol === "student" && (
            <>
              <li
                onClick={() => setMenu(1)}
                className="cursor-pointer hover:bg-[#1A2238] p-2 rounded flex items-center gap-3"
              >
                <FaHome className="text-[#00E5FF]" />
                Inicio
              </li>
              <li
                onClick={() => setMenu(2)}
                className="cursor-pointer hover:bg-[#1A2238] p-2 rounded flex items-center gap-3"
              >
                <FaBook className="text-[#00E5FF]" />
                Mis cursos
              </li>
              <li
                onClick={() => setMenu(3)}
                className="cursor-pointer hover:bg-[#1A2238] p-2 rounded flex items-center gap-3"
              >
                <FaCertificate className="text-[#00E5FF]" />
                Certificados
              </li>
              <li
                onClick={() => setMenu(4)}
                className="cursor-pointer hover:bg-[#1A2238] p-2 rounded flex items-center gap-3"
              >
                <FaBell className="text-[#00E5FF]" />
                Notificaciones
              </li>
            </>
          )}

          {rol === "instructor" && (
            <>
              <li
                onClick={() => setMenu(1)}
                className="cursor-pointer hover:bg-[#1A2238] p-2 rounded flex items-center gap-3"
              >
                <FaHome className="text-[#00E5FF]" />
                Inicio
              </li>
              <li
                onClick={() => setMenu(2)}
                className="cursor-pointer hover:bg-[#1A2238] p-2 rounded flex items-center gap-3"
              >
                <FaChalkboardTeacher className="text-[#00E5FF]" />
                Cursos
              </li>
              <li
                onClick={() => setMenu(3)}
                className="cursor-pointer hover:bg-[#1A2238] p-2 rounded flex items-center gap-3"
              >
                <FaBell className="text-[#00E5FF]" />
                Notificaciones
              </li> 
            </>
          )}
        </ul>
        {/* <button className="w-full bg-cyan-500 hover:bg-cyan-600 p-2 rounded mt-95 flex items-center justify-center gap-2">
          <FaSignOutAlt />
          Cerrar sesión
        </button> */}
      </div>

    </div>
  );
};

export default Sidebar;