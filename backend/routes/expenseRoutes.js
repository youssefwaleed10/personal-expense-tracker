const express = require("express");
const router = express.Router();
const expenseController = require("../controllers/expenseController");

// GET /api/expenses
router.get("/", expenseController.getExpenses);

// POST /api/expenses
router.post("/", expenseController.addExpense);

// DELETE /api/expenses/:id
router.delete("/:id", expenseController.deleteExpense);

module.exports = router;
