const express = require("express");

const router = express.Router();

const homeController = require("../controllers/home_controller");

router.get("/", homeController.home);
router.post("/create-todo", require("./create-todo"));
router.post("/delete-todos", require("./delete-todos"));
router.get("/sign-in", require("./sign-in"));
router.get("/sign-up", require("./sign-up"));

module.exports = router;
