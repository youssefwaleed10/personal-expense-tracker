const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: [
      "Food",
      "Rent",
      "Transportation",
      "Entertainment",
      "Utilities",
      "Others",
    ],
    default: "Others",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("Expense", ExpenseSchema);
