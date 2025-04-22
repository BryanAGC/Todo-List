import React from "react";
import { URL_BACKEND } from "../common/server";
import Swal from "sweetalert2";

const Formulario = ({ obtenerDatos, setFiltro }) => {
  const [tarea, setTarea] = React.useState("");
  const [descripcion, setDescripcion] = React.useState("");

  const cargarDatos = async (tarea) => {
    const response = await fetch(URL_BACKEND, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tarea),
    });

    if (response.status == 200) {
      //alert("Tarea Creada");
      Swal.fire({
        title: "Tarea creada correctamente!",
        icon: "success",
        draggable: true
      });
      obtenerDatos();
    }
  };

  const eventoFormulario = (evt) => {
    evt.preventDefault();
    const nuevaTarea = {
      name: tarea,
      descripcion,
      status: false,
    };
    cargarDatos(nuevaTarea);
    setTarea("");
    setDescripcion("");
  };

  return (
    <>
      <form onSubmit={eventoFormulario} className="flex flex-column col-9 shadow p-3 rounded mt-4">
        <h2 className="text-center"> TO DO LIST</h2>
        <div className="input-group mb-3 col-12">
          <label className="input-group-text">
            <i className="bi bi-list-task me-1"></i>
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Tarea"
            onChange={(evt) => setTarea(evt.target.value)}
            value={tarea}
            required
          />
        </div>
        <div className="input-group mb-3 col-12">
          <label className="input-group-text">
            <i className="bi bi-chat me-1"></i>
          </label>
          <input
            className="form-control"
            type="text"
            onChange={(evt) => setDescripcion(evt.target.value)}
            value={descripcion}
            placeholder="Desplegar tarea en React"
            required
          />
        </div>
        <button className="btn btn-info col-12 mb-1">Agregar</button>
      </form>

      {/* Botones de filtro con la función setFiltro */}
      <div className="btn-group mt-3 col-9">
        <button className="btn btn-outline-primary flex-grow-1" onClick={() => setFiltro("todos")}>Todos</button>
        <button className="btn btn-outline-info flex-grow-1" onClick={() => setFiltro("pendientes")}> Pendientes</button>
        <button className="btn btn-outline-info flex-grow-1" onClick={() => setFiltro("completados")}>Completados</button>
      </div>
    </>
  );
};

export default Formulario;
