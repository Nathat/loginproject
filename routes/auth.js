//ต้องมาแก้ code
const express = require("express");
const router = express.Router();
const loginController = require("../controllers/login-controller");
const registerController = require("../controllers/register-controller");
//const profileController = require("../controllers/profile-controller");
//const authChecker = require("../middlewares/auth-middleware");
router.get("/login", loginController.login);
//router.post("/login", loginController.postLogin);
//router.get("/logout", loginController.logout);
router.get("/register", registerController.register);
//router.post("/register", registerController.postRegister);
//router.get("/profile", authChecker, profileController);
module.exports = router;
