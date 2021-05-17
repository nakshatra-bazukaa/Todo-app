const express = require("express");

const router = express.Router();

const createTodoController = require("../controllers/create_todo_controller");

router.post("/create-todo", createTodoController.createTodo);

module.exports = router;
