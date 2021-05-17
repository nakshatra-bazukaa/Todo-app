const express = require("express");

const router = express.Router();

const homeController = require("../controllers/home_controller");

router.get("/", homeController.home);
router.post("/create-todo", require("./create-todo"));
router.post("/delete-todos", require("./delete-todos"));

module.exports = router;
