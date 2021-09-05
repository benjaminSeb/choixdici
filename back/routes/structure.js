const express = require("express");
const structureCtrl = require("../controllers/structure");
const { body } = require("express-validator");

const router = express.Router();

router.use(
	"/create",
	body("name").notEmpty().trim().escape(),
	body("localite").notEmpty().trim().escape(),
	body("categorie").notEmpty().trim().escape(),
	body("superuser").isEmail().normalizeEmail(),
	structureCtrl.createStructure
);

router.use(
	"/get",
	body("name").notEmpty().trim().escape(),
	structureCtrl.getStructure
);

router.use("/getAll", structureCtrl.getAllStructure);

router.use(
	"/update",
	body("name").notEmpty().trim().escape(),
	body("localite").notEmpty().trim().escape(),
	body("categorie").notEmpty().trim().escape(),
	body("superuser").isEmail().normalizeEmail(),
	structureCtrl.updateStructure
);

router.use(
	"/delete",
	body("name").notEmpty().trim().escape(),
	structureCtrl.deleteStructure
);

module.exports = router;
