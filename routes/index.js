const express = require("express");

const router = express.Router();

const homeController = require("../controllers/home_controller");
const createTodoController = require("../controllers/create_todo_controller");

router.get("/", homeController.home);

router.post("/create-todo", createTodoController.createTodo);

module.exports = router;
