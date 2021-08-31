const admin = require("firebase-admin");
const serviceAccount = require("../choixdici-firestore.json");

let firebase = admin.apps.length
	? admin.app().firestore()
	: admin
			.initializeApp({
				credential: admin.credential.cert(serviceAccount),
			})
			.firestore();

exports.default = firebase;
