const express = require("express");
const structureCtrl = require("../controllers/structure");

const router = express.Router();

router.use("/create", structureCtrl.createStructure);

router.use("/get", structureCtrl.getStructure);

router.use("/getAll", structureCtrl.getAllStructure);

router.use("/update", structureCtrl.updateStructure);

router.use("/delete", structureCtrl.deleteStructure);

module.exports = router;
