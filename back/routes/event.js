const express = require("express");
const eventCtrl = require("../controllers/event");

const router = express.Router();

router.use("/create", eventCtrl.createEvent);

router.use("/get", eventCtrl.getEvent);

router.use("/getAll", eventCtrl.getAllEvent);

router.use("/update", eventCtrl.updateEvent);

router.use("/delete", eventCtrl.deleteEvent);

module.exports = router;
