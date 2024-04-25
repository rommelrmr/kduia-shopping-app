import React, { useContext } from "react"; // Importa React y useContext desde 'react'
import ExpenseItem from "./ExpenseItem"; // Importa ExpenseItem desde './ExpenseItem'
import { AppContext } from "../context/AppContext"; // Importa el contexto de la aplicación desde '../context/AppContext'

const ExpenseList = () => {
  // Define el componente ExpenseList
  const { expenses } = useContext(AppContext); // Obtiene expenses del contexto de la aplicación

  return (
    <table className="table">
      {" "}
      {/* Retorna una tabla con la clase 'table' */}
      <thead className="thead-light">
        {" "}
        {/* Encabezado de la tabla */}
        <tr>
          {" "}
          {/* Fila de encabezado */}
          <th scope="col">Items</th> {/* Celda de encabezado para los items */}
          <th scope="col">Quantity</th>{" "}
          {/* Celda de encabezado para la cantidad */}
          <th scope="col">Unit Price</th>{" "}
          {/* Celda de encabezado para el precio unitario */}
          <th scope="col">Items Price</th>{" "}
          {/* Celda de encabezado para el precio total de los items */}
          <th scope="col">Remove</th> {/* Celda de encabezado para eliminar */}
        </tr>
      </thead>
      <tbody>
        {" "}
        {/* Cuerpo de la tabla */}
        {expenses.map(
          (
            expense // Mapea sobre los expenses y renderiza un ExpenseItem por cada uno
          ) => (
            <ExpenseItem // Renderiza el componente ExpenseItem
              id={expense.id} // Propiedad id
              key={expense.id} // Clave única
              name={expense.name} // Propiedad name
              quantity={expense.quantity} // Propiedad quantity
              unitprice={expense.unitprice} // Propiedad unitprice
            />
          )
        )}
      </tbody>
    </table>
  );
};

export default ExpenseList; // Exporta el componente ExpenseList
