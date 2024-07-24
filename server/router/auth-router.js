const express = require("express");
const authcontroller = require("../controllers/auth-controller");
const validate = require("../MiddleWare/validate-middleware");
const signupSchema = require("../validate/auth-validate");
const router = express.Router();



// router.get("/", (req, res) => {
//     res.status(200).send("<body> <h1>Welcome to the site home page . This is a good page from router</h1> </body>");
// });
//can be done this way

router.route("/").get(authcontroller.home)

router.route("/register").post(validate(signupSchema), authcontroller.register)

router.route("/login").post(authcontroller.login);

module.exports = router;