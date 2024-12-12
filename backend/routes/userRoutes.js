const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

// Route to get all users
router.get("/", userController.getUsers);

// Route to get a single user by ID
router.get("/user/:id", userController.getSingleUser);

// Route to create a new user
router.post("/create", userController.createUser);

// Route to update a user by ID
router.put("/update/:id", userController.updateUser);

// Route to delete a user by ID
router.delete("/delete/:id", userController.deleteUser);

module.exports = router;
