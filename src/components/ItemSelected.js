import React, { useContext, useState } from "react"; // Importa React, useContext y useState desde 'react'
import { AppContext } from "../context/AppContext"; // Importa el contexto de la aplicación desde '../context/AppContext'

const ItemSelected = (props) => {
  // Define el componente ItemSelected y recibe props como argumento
  const { dispatch } = useContext(AppContext); // Obtiene dispatch del contexto de la aplicación mediante el hook useContext

  const [name, setName] = useState(""); // Define el estado name y su función de actualización setName con el valor inicial ''
  const [quantity, setQuantity] = useState(""); // Define el estado quantity y su función de actualización setQuantity con el valor inicial ''
  const [action, setAction] = useState(""); // Define el estado action y su función de actualización setAction con el valor inicial ''

  const submitEvent = () => {
    // Define la función submitEvent
    const item = {
      // Crea un objeto item
      name: name, // Asigna el valor de name al objeto item
      quantity: parseInt(quantity), // Asigna el valor de quantity convertido a entero al objeto item
    };

    if (action === "Reduce") {
      // Si action es 'Reduce'
      dispatch({
        // Envía una acción RED_QUANTITY al reducer
        type: "RED_QUANTITY", // Tipo de acción RED_QUANTITY
        payload: item, // Carga útil de la acción, que contiene el objeto item
      });
    } else {
      // Si action no es 'Reduce'
      dispatch({
        // Envía una acción ADD_QUANTITY al reducer
        type: "ADD_QUANTITY", // Tipo de acción ADD_QUANTITY
        payload: item, // Carga útil de la acción, que contiene el objeto item
      });
    }
  };

  return (
    // Retorna un elemento JSX
    <div>
      {" "}
      {/* Div principal */}
      <div className="row">
        {" "}
        {/* Fila de la grilla */}
        <div className="input-group mb-3" style={{ marginLeft: "2rem" }}>
          {" "}
          {/* Grupo de entrada con margen izquierdo */}
          <div className="input-group-prepend">
            {" "}
            {/* Elemento previo del grupo de entrada */}
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Items
            </label>{" "}
            {/* Etiqueta del grupo de entrada */}
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect01"
            onChange={(event) => setName(event.target.value)}
          >
            {" "}
            {/* Select para seleccionar el ítem */}
            <option defaultValue>Choose...</option>{" "}
            {/* Opción predeterminada */}
            <option value="Shirt" name="Shirt">
              Shirt
            </option>{" "}
            {/* Opción de camisa */}
            <option value="Dress" name="Dress">
              Dress
            </option>{" "}
            {/* Opción de vestido */}
            <option value="Jeans" name="Jeans">
              Jeans
            </option>{" "}
            {/* Opción de jeans */}
            <option value="Dinner set" name="Dinner set">
              Dinner set
            </option>{" "}
            {/* Opción de conjunto de cena */}
            <option value="Bags" name="Bags">
              Bags
            </option>{" "}
            {/* Opción de bolsas */}
          </select>
          <div className="input-group-prepend" style={{ marginLeft: "2rem" }}>
            {" "}
            {/* Elemento previo del grupo de entrada con margen izquierdo */}
            <label className="input-group-text" htmlFor="inputGroupSelect02">
              Quantity
            </label>{" "}
            {/* Etiqueta del grupo de entrada */}
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect02"
            onChange={(event) => setAction(event.target.value)}
          >
            {" "}
            {/* Select para seleccionar la acción */}
            <option defaultValue value="Add" name="Add">
              Add
            </option>{" "}
            {/* Opción predeterminada para agregar */}
            <option value="Reduce" name="Reduce">
              Reduce
            </option>{" "}
            {/* Opción para reducir */}
          </select>
          <span
            className="eco"
            style={{ marginLeft: "2rem", marginRight: "8px" }}
          ></span>{" "}
          {/* Span vacío con estilos de margen */}
          <input
            required="required" // Campo requerido
            type="number" // Tipo de entrada número
            id="cost" // ID del campo de entrada
            value={quantity} // Valor del campo de entrada
            style={{ size: 10 }} // Estilos del campo de entrada
            onChange={(event) => setQuantity(event.target.value)} // Manejador de cambio del campo de entrada
          ></input>
          <button
            className="btn btn-primary"
            onClick={submitEvent}
            style={{ marginLeft: "2rem" }}
          >
            {" "}
            {/* Botón de guardar con estilos de margen izquierdo */}
            Save {/* Texto del botón */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemSelected; // Exporta el componente ItemSelected
