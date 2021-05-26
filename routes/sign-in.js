const express = require("express");
const router = express.Router();

const signInController = require("../controllers/sign_in_controller");

router.get("/sign-in", signInController.signIn);

module.exports = router;
