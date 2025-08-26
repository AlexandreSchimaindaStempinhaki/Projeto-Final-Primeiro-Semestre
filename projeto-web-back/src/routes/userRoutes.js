// src/routes/userRoutes.js

const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

// Cria um novo usuário
router.post("/users", userController.createUser);

// Lista todos os usuários
router.get("/users", userController.getAllUsers);

// Busca um usuário pelo ID
router.get("/users/:id", userController.getUserById);

// Atualiza um usuário existente
router.put("/users/:id", userController.updateUser);

// Deleta um usuário pelo ID
router.delete("/users/:id", userController.deleteUser);

module.exports = router;
