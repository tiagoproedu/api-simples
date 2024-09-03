const express = require("express");
const UserRepository = require("../repositories/userRepository");
const UserService = require("../services/userService");
const UserController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

const userRoutes = express.Router();

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

userRoutes.post("/", authMiddleware, userController.create);

userRoutes.get("/", userController.listAll);

module.exports = userRoutes;