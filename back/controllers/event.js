const db = require("./initConnection").default;

exports.createEvent = async (req, res, next) => {
	// Vérification autorisation user

	const existingEvent = await db.collection("event").doc(req.body.name).get();
	if (!existingEvent.exists) {
		const docRef = db.collection("event").doc(req.body.name);
		await docRef.set({
			date: req.body.date,
			lieu: req.body.lieu,
			categorie: req.body.categorie,
			structure: req.body.structure,
		});

		res.status(201).json({
			message: "Event créé !",
		});
	} else {
		res.status(500).json({
			message: `Event déjà existante avec le nom ${req.body.name}`,
		});
	}
};

exports.getEvent = async (req, res, next) => {
	const existingEvent = await db.collection("event").doc(req.body.name).get();
	if (existingEvent.exists) {
		res.status(200).json(existingEvent.data());
	} else {
		res.status(401).json({
			message: `Event non trouvée avec le nom ${req.body.name}`,
		});
	}
};

exports.getAllEvent = async (req, res, next) => {
	const events = await db.collection("event").get();
	res.status(200).json(events.docs.map((doc) => doc.data()));
};

exports.updateEvent = async (req, res, next) => {
	const existingEvent = await db.collection("event").doc(req.body.name).get();
	if (!existingEvent.exists) {
		res.status(401).json({
			message: `Event non trouvé avec le nom ${req.body.name}`,
		});
	} else {
		const docRef = db.collection("event").doc(req.body.name);
		await docRef.set({
			date: req.body.date,
			lieu: req.body.lieu,
			categorie: req.body.categorie,
			structure: req.body.structure,
		});

		res.status(201).json({
			message: "Event mis à jour !",
		});
	}
};

exports.deleteEvent = async (req, res, next) => {
	await db.collection("event").doc(req.body.name).delete();

	res.status(200).json({
		message: "Event supprimé !",
	});
};
