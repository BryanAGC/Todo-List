import React from "react";
import Card from "./Card";
import { URL_BACKEND } from "../common/server";

const Tareas = ({ listaTareas, setListaTareas, filtro, obtenerDatos }) => {
  const tareasFiltradas = listaTareas.filter((tarea) => {
    if (filtro === "pendientes") return !tarea.status;
    if (filtro === "completados") return tarea.status;
    return true;
  });

  return (
    <section className="flex flex-column justify-content-center align-items-center p-4 col-9">
      {tareasFiltradas.length === 0 ? (
        <p className="text-center mt-3">No hay tareas en esta categoría</p>
      ) : (
        tareasFiltradas.map((tarea) => (
          <Card
            key={tarea._id}
            index={tarea._id}
            isComplete={tarea.status}
            titulo={tarea.name}
            descripcion={tarea.descripcion}
            setListaTareas={setListaTareas}
            obtenerDatos={obtenerDatos} // 🔹 Pasamos la función
          />
        ))
      )}
    </section>
  );
};

export default Tareas;
