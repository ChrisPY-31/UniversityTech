// Sidebar.jsx
import {
  FaHome, FaChartLine, FaUsers, FaFolder, FaChartBar,
  FaBook, FaCertificate, FaBell, FaChalkboardTeacher,
  FaSignOutAlt, FaGraduationCap
} from "react-icons/fa";

const MENU_CONFIG = {
  admin: [
    { id: 1, label: "Inicio",      Icon: FaHome },
    { id: 2, label: "Dashboard",   Icon: FaChartLine },
    { id: 3, label: "Usuarios",    Icon: FaUsers },
    { id: 4, label: "Categorías",  Icon: FaFolder },
    { id: 5, label: "Reportes",    Icon: FaChartBar },
  ],
  student: [
    { id: 1, label: "Inicio",           Icon: FaHome },
    { id: 2, label: "Mis cursos",       Icon: FaBook },
    { id: 3, label: "Certificados",     Icon: FaCertificate },
    { id: 4, label: "Notificaciones",   Icon: FaBell },
  ],
  instructor: [
    { id: 1, label: "Inicio",           Icon: FaHome },
    { id: 2, label: "Mis cursos",       Icon: FaChalkboardTeacher },
    { id: 4, label: "Notificaciones",   Icon: FaBell },
    { id: 5, label: "Estadísticas",     Icon: FaChartBar },
  ],
};

const ROLE_LABELS = {
  admin: "Administrador",
  student: "Estudiante",
  instructor: "Instructor",
};

const MenuRoles = ({ rol, activeMenu}) => {
  const items = MENU_CONFIG[rol] ?? [];

  return (
      <nav className="flex flex-col gap-0.5 flex-1">
        {items.map(({ id, label, Icon }) => (
          <button
            key={id}
            className={`
              flex items-center gap-2.5 px-2 py-2 rounded-lg text-sm w-full text-left
              transition-colors duration-150 relative
              ${activeMenu === id
                ? "bg-cyan-500/10 text-[#00E5FF] font-medium"
                : "text-slate-400 hover:bg-[#1A2238] hover:text-slate-200"
              }
            `}
          >
            {activeMenu === id && (
              <span className="absolute left-0 top-1/4 bottom-1/4 w-0.5 bg-[#00E5FF] rounded-r" />
            )}
            <Icon className={activeMenu === id ? "text-[#00E5FF]" : "text-slate-500"} />
            {label}
          </button>
        ))}
      </nav>

  );
};

export default MenuRoles;