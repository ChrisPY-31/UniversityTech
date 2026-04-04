import React from "react";
import logoNexus from "../assets/LogoNexusTech.jpeg";

export const Navigate = () => {
  return (
    <header className="w-[80%] mx-auto navbar">
      <nav className="flex justify-between">
        <div>
          <img src={logoNexus} alt="Logo Nexus" className="w-28" />
        </div>
        <ul>
          <li>
            <button className="btn-primary ">
              Inicio de Sesion
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
