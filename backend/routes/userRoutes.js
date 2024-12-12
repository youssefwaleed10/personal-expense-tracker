const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

// Public route
router.get("/public", (req, res) => res.send("This is a public route"));

// Get all users
router.get("/", userController.getUsers);

// Get a single user by ID
router.get("/user/:id", userController.getSingleUser);

// Create a new user
router.post("/create", userController.createUser);

// Update a user by ID
router.put("/update/:id", userController.updateUser);

// Delete a user by ID
router.delete("/delete/:id", userController.deleteUser);

module.exports = router;
