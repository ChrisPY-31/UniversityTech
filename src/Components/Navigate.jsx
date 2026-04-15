import { useState } from "react";
import logoNexus from "../assets/LogoNexus.png";
import { Link } from "react-router-dom";
import { SidebarTrigger } from "./ui/sidebar";

export const Navigate = ({ isAuth }) => {

  return (
    <header >
      <nav>
       <div className="w-[90%] mx-auto flex justify-between items-center ">
          <img src={logoNexus} alt="Logo Nexus" className="w-20 py-2 " />
          <ul>
            {isAuth ? (
              <li>
                <button className="btn-primary">
                  <Link to={"profile"}>Perfil</Link>
                </button>
              </li>
            ) : (
              <li>
                <button className="btn-primary">
                  <Link to={"sign-in"}>Inicio de Sesion</Link>
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};
