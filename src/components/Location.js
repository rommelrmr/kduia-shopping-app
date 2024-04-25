import React, { useContext } from "react"; // Importa React y useContext desde 'react'
import { AppContext } from "../context/AppContext"; // Importa el contexto de la aplicación desde '../context/AppContext'

const Location = () => {
  // Define el componente Location
  const { dispatch } = useContext(AppContext); // Obtiene dispatch del contexto de la aplicación mediante el hook useContext

  const changeLocation = (val) => {
    // Define la función changeLocation que toma val como argumento
    dispatch({
      // Envía una acción CHG_LOCATION al reducer
      type: "CHG_LOCATION", // Tipo de acción CHG_LOCATION
      payload: val, // Carga útil de la acción, que contiene el valor val
    });
  };

  return (
    // Retorna un elemento JSX
    <div className="alert alert-secondary">
      {" "}
      {/* Div con clase de alerta secundaria */}
      Location{" "}
      {
        // Texto 'Location' dentro del div
        <select
          name="Location"
          id="Location"
          onChange={(event) => changeLocation(event.target.value)}
        >
          {" "}
          {/* Select para seleccionar la ubicación */}
          <option value="£">Uk(£)</option>{" "}
          {/* Opción para el Reino Unido con libra esterlina */}
          <option value="₹">India(₹)</option>{" "}
          {/* Opción para India con rupia india */}
          <option value="€">Europe(€)</option>{" "}
          {/* Opción para Europa con euro */}
          <option value="CAD">Canada(CAD)</option>{" "}
          {/* Opción para Canadá con dólar canadiense */}
        </select>
      }
    </div>
  );
};

export default Location; // Exporta el componente Location
