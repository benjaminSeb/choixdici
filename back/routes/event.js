const express = require("express");
const eventCtrl = require("../controllers/event");
const { body } = require("express-validator");

const router = express.Router();

router.use(
	"/create",
	body("name").notEmpty().trim().escape(),
	body("date").isDate(),
	body("lieu").notEmpty().trim().escape(),
	body("categorie").notEmpty().trim().escape(),
	body("structure").notEmpty().trim().escape(),
	body("superuser").isEmail().normalizeEmail(),
	eventCtrl.createEvent
);

router.use("/get", body("name").notEmpty().trim().escape(), eventCtrl.getEvent);

router.use("/getAll", eventCtrl.getAllEvent);

router.use(
	"/getAllForStruct",
	body("structure").notEmpty().trim().escape(),
	eventCtrl.getAllForStruct
);

router.use(
	"/getAllForCategorie",
	body("categorie").notEmpty().trim().escape(),
	eventCtrl.getAllForCategorie
);

router.use(
	"/update",
	body("name").notEmpty().trim().escape(),
	body("date").isDate(),
	body("lieu").notEmpty().trim().escape(),
	body("categorie").notEmpty().trim().escape(),
	body("structure").notEmpty().trim().escape(),
	body("superuser").isEmail().normalizeEmail(),
	eventCtrl.updateEvent
);

router.use(
	"/delete",
	body("name").notEmpty().trim().escape(),
	eventCtrl.deleteEvent
);

module.exports = router;
