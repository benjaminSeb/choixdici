const express = require('express');
const firestoreCtrl = require('../controllers/firestore');

const router = express.Router();

router.use('/create', firestoreCtrl.createFirestore);

router.use('/update', firestoreCtrl.updateFirestore);

router.use('/get', firestoreCtrl.getFirestore);

router.use('/delete', firestoreCtrl.deleteFirestore)

module.exports = router;