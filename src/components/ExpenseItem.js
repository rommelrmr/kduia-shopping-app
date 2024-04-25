import React, { useContext } from "react"; // Importa React y useContext desde 'react'
import { AppContext } from "../context/AppContext"; // Importa el contexto de la aplicación desde '../context/AppContext'
import { FaTimesCircle } from "react-icons/fa"; // Importa el ícono FaTimesCircle desde 'react-icons/fa'

const ExpenseItem = (props) => {
  // Define el componente ExpenseItem y recibe props como argumento
  const { dispatch, Location } = useContext(AppContext); // Obtiene dispatch y Location del contexto de la aplicación mediante el hook useContext

  const handleDeleteItem = () => {
    // Define la función handleDeleteItem
    const item = {
      // Crea un objeto item
      name: props.name, // Asigna el valor de la propiedad name de las props al objeto item
    };

    dispatch({
      // Envía una acción DELETE_ITEM al reducer
      type: "DELETE_ITEM", // Tipo de acción DELETE_ITEM
      payload: item, // Carga útil de la acción, que contiene el objeto item
    });
  };

  return (
    // Retorna un elemento JSX
    <tr>
      {" "}
      {/* Fila de la tabla */}
      <td>{props.name}</td> {/* Celda con el nombre del item */}
      <td>{props.quantity}</td> {/* Celda con la cantidad del item */}
      <td>
        {Location}
        {parseInt(props.unitprice)}
      </td>{" "}
      {/* Celda con el precio unitario del item */}
      <td>
        {Location}
        {parseInt(props.quantity) * parseInt(props.unitprice)}
      </td>{" "}
      {/* Celda con el precio total del item */}
      <td>
        <FaTimesCircle
          size="2.2em"
          color="red"
          onClick={handleDeleteItem}
        ></FaTimesCircle>
      </td>{" "}
      {/* Celda con el ícono de eliminar */}
    </tr>
  );
};

export default ExpenseItem; // Exporta el componente ExpenseItem
