import React, { useContext } from "react"; // Importa React y useContext desde 'react'
import { AppContext } from "../context/AppContext"; // Importa el contexto de la aplicación desde '../context/AppContext'

const CartValue = () => {
  // Define el componente CartValue
  const { expenses, Location } = useContext(AppContext); // Obtiene expenses y Location del contexto de la aplicación
  const totalExpenses = expenses.reduce((total, item) => {
    // Calcula el total de expenses sumando el precio total de cada item
    return (total += item.unitprice * item.quantity); // Multiplica el precio unitario por la cantidad y lo suma al total
  }, 0); // Inicializa el total en cero

  return (
    <div className="alert alert-primary">
      {" "}
      {/* Retorna un div con la clase 'alert alert-primary' */}
      <span>
        Cart Value: {Location}
        {totalExpenses}
      </span>{" "}
      {/* Muestra el valor del carrito con la ubicación y el total de expenses */}
    </div>
  );
};

export default CartValue; // Exporta el componente CartValue
