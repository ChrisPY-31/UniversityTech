import React from "react";
import logoNexus from "../assets/LogoNexusTech.jpeg";

export const Navigate = () => {
  return (
    <header className="w-[80%] mx-auto py-4 ">
      <nav className="flex justify-between">
        <div>
          <img src={logoNexus} alt="Logo Nexus" className="w-28" />
        </div>
        <ul>
          <li>
            <button className="text-white hover:text-green-400 bg-green-600 cursor-pointer px-4 py-1 rounded">
              Inicio de Sesion
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
