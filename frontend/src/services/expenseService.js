import axios from "axios";

const API_URL = "http://localhost:5001/api/expenses";

// Fetch all expenses
export const getExpenses = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching expenses:",
      error.response ? error.response.data : error.message
    );
    throw error; // Re-throw the error for further handling
  }
};

// Add a new expense
export const addExpense = async (expense) => {
  try {
    const response = await axios.post(API_URL, expense);
    return response.data;
  } catch (error) {
    console.error(
      "Error adding expense:",
      error.response ? error.response.data : error.message
    );
    throw error; // Re-throw the error for further handling
  }
};

// Delete an expense by ID
export const deleteExpense = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error(
      "Error deleting expense:",
      error.response ? error.response.data : error.message
    );
    throw error; // Re-throw the error for further handling
  }
};
