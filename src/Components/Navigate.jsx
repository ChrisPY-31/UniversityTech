import { useState } from "react";
import logoNexus from "../assets/LogoNexus.png";
import { Link } from "react-router-dom";
import { SidebarTrigger } from "./ui/sidebar";
import { FaSearch } from "react-icons/fa";

export const Navigate = ({ isAuth }) => {
  return (
    <header>
      <nav>
        <div className="w-[95%] mx-auto flex justify-between items-center ">
          <img src={logoNexus} alt="Logo Nexus" className="w-20 py-2 " />
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
                    src="https://ui-avatars.com/api/?name=Dr+Aris&background=1e3a5f&color=fff&size=36"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ) : (
              <div>
                <button className="btn-primary">
                  <Link to={"sign-in"}>Inicio de Sesion</Link>
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};
