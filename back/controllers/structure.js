const db = require("./initConnection").default;
const { validationResult } = require("express-validator");

exports.createStructure = async (req, res, next) => {
	const errors = validationResult(req);
	if (errors.isEmpty()) {
		const user = await db
			.collection("user")
			.where("email", "==", req.body.superuser)
			.get();
		if (user.empty || user.docs[0].get("admin") != true) {
			res.status(403).json({
				message: `Vous n'êtes pas autorisé à créer une nouvelle structure`,
			});
		} else {
			const existingStructure = await db
				.collection("structure")
				.doc(req.body.name)
				.get();
			if (!existingStructure.exists) {
				const docRef = db.collection("structure").doc(req.body.name);
				await docRef.set({
					localite: req.body.localite,
					categorie: req.body.categorie,
				});

				res.status(201).json({
					message: "Structure créée !",
				});
			} else {
				res.status(500).json({
					message: `Structure déjà existante avec le nom ${req.body.name}`,
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

exports.getStructure = async (req, res, next) => {
	const errors = validationResult(req);
	if (errors.isEmpty()) {
		const existingStructure = await db
			.collection("structure")
			.doc(req.body.name)
			.get();
		if (existingStructure.exists) {
			res.status(200).json(existingStructure.data());
		} else {
			res.status(401).json({
				message: `Structure non trouvée avec le nom ${req.body.name}`,
			});
		}
	} else {
		res.status(400).json({
			message: `Données non valides`,
			errors: errors.array(),
		});
	}
};

exports.getAllStructure = async (req, res, next) => {
	const structures = await db.collection("structure").get();

	res.status(200).json(structures.docs.map((doc) => doc.data()));
};

exports.updateStructure = async (req, res, next) => {
	const errors = validationResult(req);
	if (errors.isEmpty()) {
		const existingStructure = await db
			.collection("structure")
			.doc(req.body.name)
			.get();
		if (!existingStructure.exists) {
			res.status(401).json({
				message: `Structure non trouvée avec le nom ${req.body.name}`,
			});
		} else {
			const docRef = db.collection("structure").doc(req.body.name);
			await docRef.set({
				localite: req.body.localite,
				categorie: req.body.categorie,
			});

			res.status(201).json({
				message: "Structure mise à jour !",
			});
		}
	} else {
		res.status(400).json({
			message: `Données non valides`,
			errors: errors.array(),
		});
	}
};

exports.deleteStructure = async (req, res, next) => {
	const errors = validationResult(req);
	if (errors.isEmpty()) {
		await db.collection("structure").doc(req.body.name).delete();

		res.status(200).json({
			message: "Structure supprimée !",
		});
	} else {
		res.status(400).json({
			message: `Données non valides`,
			errors: errors.array(),
		});
	}
};
