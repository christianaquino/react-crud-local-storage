import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { FichaMedicaContext } from "../providers/FichaMedica";

const schema = yup.object().shape({
  rut: yup
    .string()
    .required("El campo rut es obligatorio")
    .matches(/^(\d{1,3}(?:\.\d{3}){2}-[\dkK])$/, "Ingrese un rut válido"),
  nombres: yup
    .string()
    .required("El campo nombres es obligatorio")
    .matches(/^[a-zA-Z ]+$/, "El campo nombres debe contener sólo letras"),
  apellidos: yup
    .string()
    .required("El campo apellidos es obligatorio")
    .matches(/^[a-zA-Z ]+$/, "El campo apellidos debe contener sólo letras"),
  direccion: yup.string().required("El campo dirección es obligatorio"),
  ciudad: yup.string().required("El campo ciudad es obligatorio"),
  telefono: yup
    .string()
    .required("El campo teléfono es obligatorio")
    .matches(/^[0-9]+$/, "El campo teléfono debe contener sólo múmeros")
    .length(9, "El campo teléfono debe tener 9 caracteres"),
  email: yup
    .string()
    .email("Ingrese un email válido")
    .required("El campo email es obligatorio"),
  fechaNacimiento: yup
    .string()
    .required("El campo fecha de nacimiento es obligatorio")
    .matches(
      /^([0][1-9]|[12][0-9]|3[01])(\/|-)([0][1-9]|[1][0-2])\2(\d{4})/g,
      "Ingrese una feha válida"
    ),
  estadoCivil: yup.string().required("Debe seleccionar una opción"),
});

function New() {
  const [fichaMedicaList, setFichaMedicaList] = useContext(FichaMedicaContext);

  const fields = [
    { name: "rut", label: "Rut (*)", placeHolder: "Ej: 7.416.161-8" },
    { name: "nombres", label: "Nombres (*)" },
    { name: "apellidos", label: "Apellidos (*)" },
    { name: "direccion", label: "Direccion (*)" },
    { name: "ciudad", label: "Ciudad (*)" },
    { name: "telefono", label: "Telefono (*)", placeHolder: "Ej: 971762643" },
    { name: "email", label: "Email (*)" },
    {
      name: "fechaNacimiento",
      label: "Fecha de Nacimiento (*)",
      placeHolder: "Ej: dd/mm/aaaa",
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setFichaMedicaList([...fichaMedicaList, { ...data }]);
    reset();
  };

  return (
    <div className="container col-md-6">
      <div className="card">
        <div className="card-header">Nuevo registro</div>
        <div className="container py-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            {fields.map(({ name, label, placeHolder }) => (
              <div className="mb-3" key={Math.random()}>
                <label htmlFor={name} className="form-label">
                  {label}
                </label>
                <input
                  {...register(name)}
                  className={`form-control form-control-sm ${
                    errors[name] && "is-invalid"
                  }`}
                  placeholder={placeHolder || ""}
                />
                {errors[name] && (
                  <div className="invalid-feedback">{errors[name].message}</div>
                )}
              </div>
            ))}
            <div className="mb-3" key={Math.random()}>
              <label htmlFor="estadoCivil" className="form-label">
                Estado Civil (*)
              </label>
              <select
                {...register("estadoCivil")}
                className={`form-control form-control-sm ${
                  errors.estadoCivil && "is-invalid"
                }`}
              >
                <option value=""></option>
                <option value="Soltero/a">Soltero/a</option>
                <option value="Casado/a">Casado/a</option>
                <option value="Viudo/a">Viudo/a</option>
                <option value="Divorciado/a">Divorciado/a</option>
                <option value="Separado/a">Separado/a</option>
              </select>
              {errors.estadoCivil && (
                <div className="invalid-feedback">
                  {errors.estadoCivil.message}
                </div>
              )}
            </div>
            <div className="mb-3" key={Math.random()}>
              <label htmlFor="comentarios" className="form-label">
                Comentarios
              </label>
              <textarea
                {...register("estadoCivil")}
                className="form-control form-control-sm"
              ></textarea>
            </div>
            <input type="submit" className="btn btn-primary" value="Guardar" />
            <button
              type="reset"
              className="btn btn-secondary ms-2 me-2"
              onClick={() => reset()}
            >
              Limpiar
            </button>
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
