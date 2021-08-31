const express = require("express");
const authCtrl = require("../controllers/auth");

const router = express.Router();

router.use("/create", authCtrl.createUser);

router.use("/login", authCtrl.login);

module.exports = router;
