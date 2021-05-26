const express = require("express");
const router = express.Router();

const signUpController = require("../controllers/sign_up_controller");

router.get("/sign-up", signUpController.signUp);

module.exports = router;
