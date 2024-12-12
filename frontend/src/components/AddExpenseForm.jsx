import React, { useState } from "react";
import { addExpense } from "../services/expenseService";
import "./Expense.css"; // Import the CSS file

const AddExpenseForm = ({ onAdd }) => {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState(""); // New state for description
  const [date, setDate] = useState(""); // New state for date
  const [error, setError] = useState(""); // To track any error messages

  const categories = [
    "Food",
    "Rent",
    "Transportation",
    "Entertainment",
    "Utilities",
    "Others",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate amount to ensure it's a valid number
    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
      setError("Please enter a valid amount.");
      return;
    }

    // Ensure a date is provided or default to current date
    if (!date) {
      setError("Please select a valid date.");
      return;
    }

    const newExpense = {
      category,
      amount: parseFloat(amount),
      description,
      date,
    }; // Include description and date

    // Log the submitted values to the console
    console.log("Submitted Expense:", newExpense);

    try {
      const addedExpense = await addExpense(newExpense);
      onAdd(addedExpense); // Call onAdd to notify parent component
      setCategory(""); // Clear category after submission
      setAmount(""); // Clear amount after submission
      setDescription(""); // Clear description after submission
      setDate(""); // Clear date after submission
      setError(""); // Clear error if the request is successful
    } catch (error) {
      setError("Failed to add expense. Please try again.");
    }
  };

  return (
    <div className="add-expense-section">
      <h3>Add Expense</h3>
      <form onSubmit={handleSubmit} className="expense-form">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="" disabled>
            Select Category
          </option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)} // Update description state
        />
        <input
          type="date"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)} // Update date state
          required
        />
        {error && <div className="error-message">{error}</div>}{" "}
        {/* Display error message */}
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default AddExpenseForm;
