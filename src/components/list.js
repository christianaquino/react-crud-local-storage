import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FichaMedicaContext } from "../providers/FichaMedica";

function List() {
  const [fichaMedicaList] = useContext(FichaMedicaContext);
  return (
    <div className="container-fluid">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Rut</th>
            <th scope="col">Nombres</th>
            <th scope="col">Apellidos</th>
            <th scope="col">Direccion</th>
            <th scope="col">Ciudad</th>
            <th scope="col">Telefono</th>
            <th scope="col">Email</th>
            <th scope="col">Fecha Nac</th>
            <th scope="col">Estado Civil</th>
            <th scope="col">Comentarios</th>
          </tr>
        </thead>
        <tbody>
          {fichaMedicaList.map((registro) => (
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
