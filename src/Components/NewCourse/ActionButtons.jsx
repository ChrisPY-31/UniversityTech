import React from "react";

const ActionButtons = ({ handleNewCourse, isEditing }) => {
  return (
    <div className="flex items-center justify-end gap-4">
      <button className="px-6 py-3 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
        Guardar borrador
      </button>
      <button
        onClick={() => handleNewCourse()}
        className="px-6 py-3 rounded-lg bg-red-500 text-white text-sm font-bold hover:bg-red-600 transition-colors cursor-pointer"
      >
        {isEditing ? "Actualizar" : "Continuar"}
      </button>
    </div>
  );
};

export default ActionButtons;
