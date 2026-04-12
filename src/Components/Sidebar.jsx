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
    { id: 3, label: "Estudiantes",      Icon: FaGraduationCap },
    { id: 4, label: "Notificaciones",   Icon: FaBell },
    { id: 5, label: "Estadísticas",     Icon: FaChartBar },
  ],
};

const ROLE_LABELS = {
  admin: "Administrador",
  student: "Estudiante",
  instructor: "Instructor",
};

const Sidebar = ({ rol, activeMenu, setMenu, user, onLogout }) => {
  const items = MENU_CONFIG[rol] ?? [];

  return (
    <div className="w-56 h-screen fixed bg-[#0B0F19] flex flex-col py-5 px-3">
      {/* Logo */}
      <div className="flex items-center gap-2 px-2 mb-7">
        <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
          <span className="text-[#00E5FF] text-xs font-bold">E</span>
        </div>
        <span className="text-slate-200 font-medium text-sm">EduApp</span>
      </div>

      {/* Sección y nav items */}
      <p className="text-[10px] uppercase tracking-widest text-slate-600 px-2 mb-2">
        {ROLE_LABELS[rol]}
      </p>

      <nav className="flex flex-col gap-0.5 flex-1">
        {items.map(({ id, label, Icon }) => (
          <button
            key={id}
            onClick={() => setMenu(id)}
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

      {/* Footer: usuario + logout */}
      <div className="border-t border-slate-800 pt-3 mt-3">
        <div className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-[#1A2238] cursor-pointer mb-1">
          <div className="w-7 h-7 rounded-full bg-slate-700 flex items-center justify-center text-xs text-slate-300 font-medium flex-shrink-0">
            {user?.name?.slice(0, 2).toUpperCase() ?? "??"}
          </div>
          <div className="overflow-hidden">
            <p className="text-slate-200 text-xs font-medium truncate">{user?.name ?? "Usuario"}</p>
            <p className="text-slate-500 text-[10px]">{ROLE_LABELS[rol]}</p>
          </div>
        </div>

        <button
          onClick={onLogout}
          className="flex items-center gap-2.5 px-2 py-2 rounded-lg text-sm text-slate-500 hover:bg-red-500/10 hover:text-red-400 transition-colors w-full"
        >
          <FaSignOutAlt />
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default Sidebar;