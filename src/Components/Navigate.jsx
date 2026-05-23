import { use, useState } from "react";
import logoNexus from "../assets/LogoNexus.png";
import { Link} from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useForm } from "@/hooks/useForm";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Navigate = ({ isAuth }) => {
  const [isMenuOpen, setIsOpenMenu] = useState(false);
  const {logOut} = useForm();
  const {user} = useSelector((state ) => state.user)
  const navi = useNavigate(); 
  return (
    <header>
      <nav>
        <div className="w-[95%] mx-auto flex justify-between items-center ">
          <img 
          onClick={()=> {isAuth ? navi("/home") : navi("/")}}
          src={logoNexus} alt="Logo Nexus" className="w-20 py-2 cursor-pointer" />
          <div>
            {isAuth ? (
              <div className="flex items-center gap-4">
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type="text"
                    placeholder="Buscar..."
                    className="pl-9 pr-4 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 placeholder-gray-400 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-52"
                  />
                </div>
                <div className="w-9 h-9 rounded-full bg-blue-900 border-2 border-blue-300 overflow-hidden">
                  <img
                    onClick={() => setIsOpenMenu(!isMenuOpen)}
                    src={user?.image ? user?.image : "https://ui-avatars.com/api/?name=Dr+Aris&background=1e3a5f&color=fff&size=36"}
                    alt="Profile"
                    className="w-full h-full object-cover cursor-pointer"
                  />
                </div>
                {isMenuOpen && (
                  <div className="absolute right-4 top-18 w-48 bg-white rounded-md shadow-lg py-2 z-10">
                    <h3 className="block px-4 py-2 text-gray-700 ">
                      Hola { user?.name ? user.name : "Usuario"}!
                    </h3>
                    <hr />
                    <ul>
                      <Link
                        to={"/user/profile"}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Perfil
                      </Link>
                      <Link
                        to={"settings"}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Configuración
                      </Link>
                      <li
                        onClick={() => logOut()}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                      >
                        Cerrar Sesión
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
                <button className="btn-primary cursor-pointer" onClick={()=> navi("sign-in")}>
                  Inicio de sesion
                </button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};
