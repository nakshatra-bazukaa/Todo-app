const express = require("express");

const router = express.Router();

const homeController = require("../controllers/home_controller");
const createTodoController = require("../controllers/create_todo_controller");
const deleteTodosController = require("../controllers/delete_todos_controller");

router.get("/", homeController.home);

router.post("/create-todo", createTodoController.createTodo);

router.post("/delete-todos", deleteTodosController.deleteTodos);

module.exports = router;
