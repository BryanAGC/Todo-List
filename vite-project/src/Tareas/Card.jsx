import React, { useState } from 'react';
import { URL_BACKEND } from "../common/server";

const Card = ({ isComplete, titulo, descripcion, setListaTareas, index, obtenerDatos }) => {
  const [isCompleteState, setIsCompleteState] = useState(isComplete);

  const eliminarTarea = async () => {
    try {
      const response = await fetch(`${URL_BACKEND}/${index}`, {
        method: "DELETE",
      });

      if (response.ok) {
        obtenerDatos(); // 🔹 Volver a obtener los datos desde el backend
      }
    } catch (error) {
      console.error("Error eliminando la tarea:", error);
    }
  };

  const completarTarea = async () => {
    try {
      const response = await fetch(`${URL_BACKEND}/${index}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: !isCompleteState }), // Cambiar estado
      });

      if (response.ok) {
        setIsCompleteState(!isCompleteState);
        obtenerDatos(); // 🔹 Volver a obtener los datos desde el backend
      }
    } catch (error) {
      console.error("Error actualizando la tarea:", error);
    }
  };

  const handleClick = () => {
    if (isCompleteState) {
      eliminarTarea();
    } else {
      completarTarea();
    }
  };

  return (
    <div className="card col-12 p-2 shadow-sm flex-row justify-content-between mb-2">
      <div className="col-8">
        <h3 className={isCompleteState ? "text-secondary text-decoration-line-through" : "text-primary"}>
          {titulo}
        </h3>
        <p className="text-secondary">{descripcion}</p>
      </div>
      <i 
        className={isCompleteState ? "bi bi-trash2 text-danger fs-4" : "bi bi-journal-check text-success fs-4"}
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      ></i>
    </div>
  );
};

export default Card;
