const express = require("express");
const authcontroller = require("../controllers/auth-controller");
const validate = require("../MiddleWare/validate-middleware");
const signupSchema = require("../validate/auth-validate");
const authMiddleware = require("../MiddleWare/auth-middleware");
const router = express.Router();

router.route("/").get(authcontroller.home)

router.route("/register").post(validate(signupSchema), authcontroller.register)

router.route("/login").post(authcontroller.login);

router.route('/user').get(authMiddleware,authcontroller.user);

module.exports = router;