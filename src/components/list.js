import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FichaMedicaContext } from "../providers/FichaMedica";

function List() {
  const [fichaMedicaList] = useContext(FichaMedicaContext);
  const [records, setRecords] = useState(fichaMedicaList);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setRecords(
      fichaMedicaList.filter((record) =>
        record.apellidos.toLowerCase().includes(data.searchText.toLowerCase())
      )
    );
  };

  const clearFilter = () => {
    setRecords(fichaMedicaList);
  };

  return (
    <div className="container-fluid">
      <form
        className="row row-cols-lg-auto g-2 align-items-center pb-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="col-12">
          <input
            className="form-control"
            {...register("searchText")}
            placeholder="Buscar por apellido"
          />
        </div>
        <div className="col-12">
          <button className="btn btn-success">Buscar Registro</button>
        </div>
        <div className="col-12">
          <button
            className="btn btn-secondary"
            type="reset"
            onClick={clearFilter}
          >
            Limpiar Filtro
          </button>
        </div>
      </form>

      <table className="table table-bordered">
        <thead>
          <tr className="table-light">
            <th scope="col">Rut</th>
            <th scope="col">Nombres</th>
            <th scope="col">Apellidos</th>
            <th scope="col">Dirección</th>
            <th scope="col">Ciudad</th>
            <th scope="col">Teléfono</th>
            <th scope="col">Email</th>
            <th scope="col">Fecha Nac</th>
            <th scope="col">Estado Civil</th>
            <th scope="col">Comentarios</th>
          </tr>
        </thead>
        <tbody>
          {records.map((registro) => (
            <tr>
              <td>{registro.rut}</td>
              <td>{registro.nombres}</td>
              <td>{registro.apellidos}</td>
              <td>{registro.direccion}</td>
              <td>{registro.ciudad}</td>
              <td>{registro.telefono}</td>
              <td>{registro.email}</td>
              <td>{registro.fechaNacimiento}</td>
              <td>{registro.estadoCivil}</td>
              <td>{registro.comentarios}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to={"/new"} className="btn btn-primary">
        Nuevo Registro
      </Link>
    </div>
  );
}

export default List;
