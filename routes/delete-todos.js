const express = require("express");

const router = express.Router();

const deleteTodosController = require("../controllers/delete_todos_controller");

router.post("/delete-todos", deleteTodosController.deleteTodos);

module.exports = router;
