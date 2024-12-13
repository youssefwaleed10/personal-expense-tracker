import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client"; // Import ReactDOM to render the component
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"; // Import React Router
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import { deleteExpense } from "./services/expenseService"; // Import deleteExpense
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AdminPage from "./components/AdminPage";

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
    <Router>
      <div>
        <h1>Expense Tracker</h1>
        <Routes>
          <Route path="/" element={<Navigate to="/signin" />} />{" "}
          {/* Redirect root to /signin */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route
            path="/add-expense"
            element={<AddExpenseForm onAdd={handleAdd} />}
          />
          <Route
            path="/expenses"
            element={
              <ExpenseList expenses={expenses} handleDelete={handleDelete} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

// The following line replaces the functionality of `main.jsx`
// ReactDOM.render is no longer used; instead, use React 18's createRoot
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);

export default App;
