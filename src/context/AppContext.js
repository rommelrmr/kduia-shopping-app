import React, { createContext, useReducer } from "react"; // Importa React y los hooks createContext y useReducer
// 5. El reductor - se utiliza para actualizar el estado, según la acción
export const AppReducer = (state, action) => {
  let new_expenses = []; // Inicializa un nuevo arreglo para gastos
  switch (
    action.type // Evalúa el tipo de acción
  ) {
    case "ADD_QUANTITY": // Caso para aumentar la cantidad de un artículo
      let updatedqty = false; // Bandera para indicar si se actualizó la cantidad
      state.expenses.map((expense) => {
        // Itera sobre los gastos del estado
        if (expense.name === action.payload.name) {
          // Comprueba si el nombre del gasto coincide con el nombre de la acción
          expense.quantity = expense.quantity + action.payload.quantity; // Aumenta la cantidad del gasto
          updatedqty = true; // Establece la bandera como verdadera
        }
        new_expenses.push(expense); // Agrega el gasto actual al nuevo arreglo de gastos
        return true; // Retorna verdadero para cada elemento del arreglo de gastos
      });
      state.expenses = new_expenses; // Actualiza el arreglo de gastos en el estado
      action.type = "DONE"; // Marca la acción como realizada
      return {
        ...state, // Retorna el nuevo estado
      };
    case "RED_QUANTITY": // Caso para reducir la cantidad de un artículo
      state.expenses.map((expense) => {
        // Itera sobre los gastos del estado
        if (expense.name === action.payload.name) {
          // Comprueba si el nombre del gasto coincide con el nombre de la acción
          expense.quantity = expense.quantity - action.payload.quantity; // Reduce la cantidad del gasto
        }
        expense.quantity = expense.quantity < 0 ? 0 : expense.quantity; // Asegura que la cantidad no sea menor que cero
        new_expenses.push(expense); // Agrega el gasto actual al nuevo arreglo de gastos
        return true; // Retorna verdadero para cada elemento del arreglo de gastos
      });
      state.expenses = new_expenses; // Actualiza el arreglo de gastos en el estado
      action.type = "DONE"; // Marca la acción como realizada
      return {
        ...state, // Retorna el nuevo estado
      };
    case "DELETE_ITEM": // Caso para eliminar un artículo
      state.expenses.map((expense) => {
        // Itera sobre los gastos del estado
        if (expense.name === action.payload.name) {
          // Comprueba si el nombre del gasto coincide con el nombre de la acción
          expense.quantity = 0; // Establece la cantidad del gasto en cero
        }
        new_expenses.push(expense); // Agrega el gasto actual al nuevo arreglo de gastos
        return true; // Retorna verdadero para cada elemento del arreglo de gastos
      });
      state.expenses = new_expenses; // Actualiza el arreglo de gastos en el estado
      action.type = "DONE"; // Marca la acción como realizada

      return {
        ...state, // Retorna el nuevo estado
      };
    case "CHG_LOCATION": // Caso para cambiar la ubicación
      action.type = "DONE"; // Marca la acción como realizada
      state.Location = action.payload; // Establece la nueva ubicación en el estado
      return {
        ...state, // Retorna el nuevo estado
      };
    default: // Caso por defecto
      return state; // Retorna el estado sin cambios
  }
};

// 1. Establece el estado inicial cuando se carga la aplicación
const initialState = {
  expenses: [
    // Arreglo de gastos inicial
    { id: "Shirt", name: "Shirt", quantity: 0, unitprice: 500 }, // Gasto de camisa
    { id: "Jeans", name: "Jeans", quantity: 0, unitprice: 300 }, // Gasto de jeans
    { id: "Dress", name: "Dress", quantity: 0, unitprice: 400 }, // Gasto de vestido
    { id: "Dinner set", name: "Dinner set", quantity: 0, unitprice: 600 }, // Gasto de juego de cena
    { id: "Bags", name: "Bags", quantity: 0, unitprice: 200 }, // Gasto de bolsas
  ],
  Location: "£", // Ubicación inicial
};

// 2. Crea el contexto, esto es lo que importan y usan nuestros componentes para obtener el estado
export const AppContext = createContext();

// 3. Componente Proveedor - envuelve los componentes a los que queremos dar acceso al estado
// Acepta los hijos, que son los componentes anidados (envueltos)
export const AppProvider = (props) => {
  // 4. Configura el estado de la aplicación, toma un reductor y un estado inicial
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Calcula el valor total del carrito sumando el precio unitario por la cantidad de cada artículo
  const totalExpenses = state.expenses.reduce((total, item) => {
    return (total = total + item.unitprice * item.quantity);
  }, 0);
  state.CartValue = totalExpenses; // Agrega el valor total del carrito al estado

  return (
    <AppContext.Provider
      value={{
        expenses: state.expenses, // Arreglo de gastos
        CartValue: state.CartValue, // Valor total del carrito
        dispatch, // Función de despacho
        Location: state.Location, // Ubicación
      }}
    >
      {props.children} {/* Renderiza los componentes hijos */}
    </AppContext.Provider>
  );
};
