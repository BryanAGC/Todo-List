import React, { useEffect, useState } from "react";
import Header from "./Header";
import Formulario from "./Formulario";
import Tareas from "./Tareas";
import { URL_BACKEND } from "./common/server";

const App = () => {
  const [listaTareas, setListaTareas] = useState([]);
  const [filtro, setFiltro] = useState("todos"); // Mover estado del filtro aquí

  const obtenerDatos = async () => {
    const response = await fetch(URL_BACKEND);
    if (response.status == 200) {
      const tareas = await response.json();
      setListaTareas(tareas);
    }
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  return (
    <>
      <Header />
      <Formulario obtenerDatos={obtenerDatos} setFiltro={setFiltro} />
      <Tareas 
  listaTareas={listaTareas}
  setListaTareas={setListaTareas}
  filtro={filtro}
  obtenerDatos={obtenerDatos} // 🔹 Pasamos la función aquí
/>

    </>
  );
};

export default App;
