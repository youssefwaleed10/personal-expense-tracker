import React, { useEffect, useState } from "react";
import { getExpenses, deleteExpense } from "../services/expenseService";
import "./Expense.css";

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(""); // New state for error messages

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const data = await getExpenses();
        setExpenses(data);
      } catch (error) {
        setError("Failed to fetch expenses. Please try again.");
      }
    };
    fetchExpenses();
  }, []);

  const handleDelete = async (id) => {
    try {
      // Optimistically update the UI before calling the delete API
      setExpenses(expenses.filter((expense) => expense._id !== id));

      // Call the API to delete the expense
      await deleteExpense(id);
    } catch (error) {
      setError("Failed to delete expense. Please try again.");
      // Rollback UI update if deletion fails
      setExpenses((prevExpenses) => [
        ...prevExpenses,
        expenses.find((expense) => expense._id === id),
      ]);
    }
  };

  return (
    <div>
      <h2>Expenses</h2>
      {error && <div style={{ color: "red" }}>{error}</div>}{" "}
      {/* Display error message */}
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Price</th>
            <th>Description</th>
            <th>Date</th>
            <th>Actions</th>{" "}
            {/* Add column for actions (e.g., delete button) */}
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense._id}>
              <td>{expense.category}</td>
              <td>${expense.amount}</td>
              <td>{expense.description}</td>
              <td>{new Date(expense.date).toLocaleDateString()}</td>{" "}
              {/* Format the date */}
              <td>
                <button onClick={() => handleDelete(expense._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
