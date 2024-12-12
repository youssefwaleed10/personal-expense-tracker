const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const app = express();

// CORS setup to allow requests from 'http://localhost:5173'
app.use(
  cors({
    origin: "http://localhost:5173", // Allow this specific origin
    methods: ["GET", "POST", "DELETE"], // Allow specific HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allow specific headers
  })
);

// Middleware for parsing JSON bodies
app.use(express.json());

// Import Routes
const expenseRoutes = require("./routes/expenseRoutes");

// Use Routes
app.use("/api/expenses", expenseRoutes);

// Connect to MongoDB
const PORT = process.env.PORT || 5001;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("MongoDB connection error:", err));
