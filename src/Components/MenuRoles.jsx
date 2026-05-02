// Sidebar.jsx
import {
  FaHome, FaChartLine, FaUsers, FaFolder, FaChartBar,
  FaBook, FaCertificate, FaBell, FaChalkboardTeacher,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const MENU_CONFIG = {
  admin: [
    { id: 1, label: "Inicio",      Icon: FaHome , to: "/home"},
    { id: 2, label: "Dashboard",   Icon: FaChartLine , to: "/dashboard"},
    { id: 3, label: "Usuarios",    Icon: FaUsers , to: "/users"},
    { id: 4, label: "Crear cuentas", Icon: FaUser , to: "/newAccounts"},
  ],
  student: [
    { id: 1, label: "Inicio",           Icon: FaHome , to: "/home"},
    { id: 2, label: "Mis rutas",       Icon: FaBook , to: "/cursos"},
    { id: 3, label: "Notificaciones",   Icon: FaBell , to: "/notificaciones"},
  ],
  instructor: [
    { id: 1, label: "Inicio",           Icon: FaHome , to: "/home"},
    { id: 2, label: "Mis cursos",       Icon: FaChalkboardTeacher , to: "/instructor"},
    { id: 3, label: "Notificaciones",   Icon: FaBell , to: "/notificaciones"},
  ],
};


const MenuRoles = ({ rol, activeMenu}) => {
  const items = MENU_CONFIG[rol] ?? [];

  return (
      <nav className="flex flex-col gap-0.5 flex-1">
        {items.map(({ id, label, Icon ,to}) => (
          <Link
            to={to}
            key={id}
            className={`
              flex items-center gap-2.5 px-2 py-2 rounded-lg text-sm w-full text-left
              transition-colors duration-150 relative text-slate-400 hover:bg-[#1A2238] hover:text-slate-200
            `}
          >
            <Icon className="text-slate-500" />
            {label}
          </Link>
        ))}
      </nav>

  );
};

export default MenuRoles;