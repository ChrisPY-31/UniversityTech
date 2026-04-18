import React, { useState } from "react";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useNavigate } from "react-router-dom";


const CoursesCard = ({ titulo, descripcion, imagen, puntuacion }) => {

    const [hovered, setHovered] = useState(false);
    const navigate = useNavigate();

  const handleClick = () => {
        navigate("/course/descripcion");
  };


  return (
    <Card
      className="relative w-full max-w-sm pt-0 overflow-hidden cursor-pointer my-3"
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Imagen con zoom */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={imagen}
          alt="Course cover"
          className="w-full h-full object-cover transition-transform duration-300"
          style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
        />

        {/* Overlay oscuro + botón */}
        <div
          className="absolute inset-0 flex items-end  transition-all duration-300"
          style={{ background: hovered ? "rgba(0,0,0,0.52)" : "rgba(0,0,0,0)" }}
        >
          <button
            onClick={(e) => { e.stopPropagation(); handleClick(); }}
            className="flex items-center gap-2  text-white font-medium px-5 py-2 rounded-full text-sm transition-all duration-300"
            style={{
              opacity: hovered ? 1 : 0,
              transform: hovered ? "translateY(0)" : "translateY(8px)",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 8h10M9 4l4 4-4 4"/>
            </svg>
            Ir al curso
          </button>
        </div>
      </div>

      <CardHeader>
        <CardTitle className="text-white">{titulo}</CardTitle>
        <CardDescription>{descripcion}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default CoursesCard;
