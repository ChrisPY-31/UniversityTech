import React from "react";

import logoNexus from "../assets/LogoNexus.png";

export const Navigate = () => {
  return (
    <header className="navbar  border sticky top-0 ">
      <nav className="w-[80%] mx-auto flex justify-between items-center alig py-3 border">
        <div> 
          <img src={logoNexus} alt="Logo Nexus" className="w-25 border" />
        </div>
        <ul>
          <li>
            <button className="btn-primary">
              Inicio de Sesion 
            </button> 
          </li>
        </ul>
      </nav>
    </header>
  ); 
};

