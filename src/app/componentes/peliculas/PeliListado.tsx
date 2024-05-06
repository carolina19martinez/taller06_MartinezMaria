import { useState } from "react";
import { Pelicula } from "../../modelos/Pelicula";
import { ARREGLO_PELICULAS } from "../../mocks/Pelicula-mocks";
import { ARREGLO_PELICULA_GENERO } from "../../utilidades/dominios/DomiGenero";

export const PeliListado = () => {

  const [arrPeliculas] = useState<Pelicula[]>(ARREGLO_PELICULAS);

  const obtenerNombreGenero =(valor: string)=>{
    for(const objGen of ARREGLO_PELICULA_GENERO){
      if (objGen.codGenero==valor){
        return objGen.nombreGenero;
      }
    }
  }

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="col-md-11 mt-4">
          <table className="table table-striped table-hover">
            <thead>
              <tr className="table-danger">
                <th style={{ width: "10%" }}>Código</th>
                <th style={{ width: "30%" }}>Nombre</th>
                <th style={{ width: "20%" }}>Género</th>
                <th style={{ width: "30%" }}>Protagonista</th>
                <th style={{ width: "10%" }}>Imágen</th>
              </tr>
            </thead>
            <tbody>
              {
                arrPeliculas.map((miPeli: Pelicula) => (
                  <tr key={miPeli.codPelicula} className="alig-middle">
                    <td>{miPeli.codPelicula}</td>
                    <td>{miPeli.nombrePelicula}</td>
                    <td>{obtenerNombreGenero(miPeli.generoPelicula)}</td>
                    <td>{miPeli.protagonistaPelicula}</td>
                    <td>
                      <img src={miPeli.imagenPeliculaBase64}alt="" className="imagenListado"/>
                      <div className="text-info"> {miPeli.imagenPelicula}</div>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
