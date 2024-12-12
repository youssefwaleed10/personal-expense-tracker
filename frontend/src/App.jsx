import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client"; // Import ReactDOM to render the component
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import { deleteExpense } from "./services/expenseService"; // Import deleteExpense

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const handleAdd = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const handleDelete = async (id) => {
    await deleteExpense(id); // Call deleteExpense to delete from the backend
    setExpenses(expenses.filter((expense) => expense._id !== id)); // Use '_id' to match the expense identifier
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <AddExpenseForm onAdd={handleAdd} />
      <ExpenseList expenses={expenses} handleDelete={handleDelete} />{" "}
      {/* Pass expenses to ExpenseList */}
    </div>
  );
};

// The following line replaces the functionality of `main.jsx`
// ReactDOM.render is no longer used; instead, use React 18's createRoot
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);

export default App;
