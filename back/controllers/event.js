const db = require("./initConnection").default;
const { validationResult } = require("express-validator");

exports.createEvent = async (req, res, next) => {
	const errors = validationResult(req);
	if (errors.isEmpty()) {
		const user = await db
			.collection("user")
			.where("email", "==", req.body.superuser)
			.get();
		if (user.empty || user.docs[0].get("admin") != true) {
			res.status(403).json({
				message: `Vous n'êtes pas autorisé à créer un nouvel évènement`,
			});
		} else {
			const existingStructure = await db
				.collection("structure")
				.doc(req.body.structure)
				.get();
			if (existingStructure.exists) {
				const existingEvent = await db
					.collection("event")
					.doc(req.body.name)
					.get();
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
			} else {
				res.status(500).json({
					message: `Structure non trouvée pour l'id ${req.body.structure}`,
				});
			}
		}
	} else {
		res.status(400).json({
			message: `Données non valides`,
			errors: errors.array(),
		});
	}
};

exports.getEvent = async (req, res, next) => {
	const errors = validationResult(req);
	if (errors.isEmpty()) {
		const existingEvent = await db.collection("event").doc(req.body.name).get();
		if (existingEvent.exists) {
			res.status(200).json(existingEvent.data());
		} else {
			res.status(401).json({
				message: `Event non trouvée avec le nom ${req.body.name}`,
			});
		}
	} else {
		res.status(400).json({
			message: `Données non valides`,
			errors: errors.array(),
		});
	}
};

exports.getAllEvent = async (req, res, next) => {
	const events = await db.collection("event").get();
	res.status(200).json(events.docs.map((doc) => doc.data()));
};

exports.getAllForStruct = async (req, res, next) => {
	const errors = validationResult(req);
	if (errors.isEmpty()) {
		const existingStructure = await db
			.collection("structure")
			.doc(req.body.structure)
			.get();
		if (existingStructure.exists) {
			const structureEvents = await db
				.collection("event")
				.where("structure", "==", req.body.structure)
				.get();
			res.status(200).json(structureEvents.docs.map((doc) => doc.data()));
		} else {
			res.status(500).json({
				message: `Structure non trouvée pour l'id ${req.body.structure}`,
			});
		}
	} else {
		res.status(400).json({
			message: `Données non valides`,
			errors: errors.array(),
		});
	}
};

exports.getAllForCategorie = async (req, res, next) => {
	const errors = validationResult(req);
	if (errors.isEmpty()) {
		const categorieEvents = await db
			.collection("event")
			.where("categorie", "==", req.body.categorie)
			.get();
		res.status(200).json(categorieEvents.docs.map((doc) => doc.data()));
	} else {
		res.status(400).json({
			message: `Données non valides`,
			errors: errors.array(),
		});
	}
};

exports.updateEvent = async (req, res, next) => {
	const errors = validationResult(req);
	if (errors.isEmpty()) {
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
	} else {
		res.status(400).json({
			message: `Données non valides`,
			errors: errors.array(),
		});
	}
};

exports.deleteEvent = async (req, res, next) => {
	const errors = validationResult(req);
	if (errors.isEmpty()) {
		await db.collection("event").doc(req.body.name).delete();

		res.status(200).json({
			message: "Event supprimé !",
		});
	} else {
		res.status(400).json({
			message: `Données non valides`,
			errors: errors.array(),
		});
	}
};
