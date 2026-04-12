import { useState } from "react";
import logoNexus from "../assets/LogoNexus.png";
import { Link } from "react-router-dom";

export const Navigate = () => {
  const [autentication, setAutentication] = useState(true);

  return (
    <header >
      <nav>
        {autentication && (
          <div className=" w-20 bg-green-500 h-[100dvh] absolute">
            <ul>
              <li>Sobre nostros</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Contact</li>
            </ul>
          </div>
        )}

        <div className="w-[80%] mx-auto flex justify-between items-center alig py-3 ">
          <img src={logoNexus} alt="Logo Nexus" className="w-25 " />
          <ul>
            <li>
              <button className="btn-primary">
                <Link to={"sing-in"}>Inicio de Sesion</Link>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
