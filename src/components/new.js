import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { FichaMedicaContext } from "../providers/FichaMedica";

function New() {
  const [fichaMedicaList, setFichaMedicaList] = useContext(FichaMedicaContext);

  const fields = [
    { name: "rut", label: "Rut", required: true },
    { name: "nombres", label: "Nombres", required: true },
    { name: "apellidos", label: "Apellidos", required: true },
    { name: "direccion", label: "Direccion", required: true },
    { name: "ciudad", label: "Ciudad", required: true },
    { name: "telefono", label: "Telefono", required: true },
    { name: "email", label: "Email", required: true },
    { name: "fechaNacimiento", label: "Fecha de Nacimiento", required: true },
    { name: "estadoCivil", label: "Estado Civil", required: true },
    { name: "comentarios", label: "Comentarios", required: true },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) =>
    setFichaMedicaList([...fichaMedicaList, { ...data }]);

  return (
    <div className="container col-md-6">
      <div className="card">
        <div class="card-header">Nuevo registro</div>
        <div className="container py-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            {fields.map(({ name, label, required }) => (
              <div class="mb-3">
                <label for={name} class="form-label">
                  {label}
                </label>
                <input
                  {...register(name, { required: required })}
                  className="form-control"
                />
                {errors[name] && <div class="form-text">Requerido</div>}
              </div>
            ))}

            <input type="submit" className="btn btn-primary" value="Guardar" />
            <button className="btn btn-secondary ms-2 me-2">Limpiar</button>
            <Link to={"/"} className="btn btn-danger">
              Cancelar
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default New;
