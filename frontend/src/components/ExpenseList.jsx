import React, { useEffect, useState } from "react";
import { getExpenses, deleteExpense } from "../services/expenseService";
import "./Expense.css"; // Make sure the CSS file is linked

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

  // Group expenses by date
  const groupExpensesByDate = () => {
    const today = new Date().toLocaleDateString();
    const grouped = expenses.reduce((groups, expense) => {
      const expenseDate = new Date(expense.date).toLocaleDateString();
      const groupName = expenseDate === today ? "Today" : expenseDate;
      if (!groups[groupName]) {
        groups[groupName] = [];
      }
      groups[groupName].push(expense);
      return groups;
    }, {});

    return grouped;
  };

  const groupedExpenses = groupExpensesByDate();

  return (
    <div className="expense-list container">
      <h2>Expenses</h2>
      {error && <div className="error-message">{error}</div>}{" "}
      {/* Use error-message class */}
      <div className="expense-list">
        {Object.keys(groupedExpenses).map((date) => (
          <div key={date} className="expense-date-group">
            <h3>{date}</h3>
            <table>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {groupedExpenses[date].map((expense) => (
                  <tr key={expense._id}>
                    <td>{expense.category}</td>
                    <td>${expense.amount}</td>
                    <td>{expense.description}</td>
                    <td>
                      <button
                        className="delete-button"
                        onClick={() => handleDelete(expense._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpenseList;
