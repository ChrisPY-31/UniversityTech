import React from "react";

export const BannerPrincipal = () => {
  return (
    <div className="h-[500px] mx-auto flex items-center ">
      <div className="w-1/2">
        <h1 className="text-3xl font-semibold my-4">
          La escuela de especializaciones 
          para estudiantes 
        </h1>
        <div className="my-2">
        <p>Nuestro estudiantes consiguen trabajo muchos mas rapido</p>
        <p>¿Que quieres aprender?</p>
        </div>
        <button className="bg-green-600 py-2 px-6 rounded hover:bg-green-800 text-white font-semibold cursor-pointer">Empieza Ya</button>
      </div>
      <div className="w-1/2">
        <img
          src="https://png.pngtree.com/background/20250111/original/pngtree-futuristic-neon-banner-background-picture-image_15493380.jpg"
          alt="Banner Principal"
        />
      </div>
    </div>
  );
};
