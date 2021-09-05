const express = require("express");
const authCtrl = require("../controllers/auth");
const { body } = require("express-validator");

const router = express.Router();

router.use(
	"/create",
	body("email").isEmail().normalizeEmail(),
	body("superuser").isEmail().normalizeEmail(),
	body("firstName").notEmpty().trim().escape(),
	body("lastName").notEmpty().trim().escape(),
	body("pwd").isString() /*.isStrongPassword()*/,
	body("admin").isBoolean(),
	body("structure").isString(),
	authCtrl.createUser
);

router.use(
	"/login",
	body("email").isEmail().normalizeEmail(),
	body("pwd").isString() /*.isStrongPassword()*/,
	authCtrl.login
);

module.exports = router;
