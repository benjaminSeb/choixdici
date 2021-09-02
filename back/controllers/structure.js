const db = require("./initConnection").default;

exports.createStructure = async (req, res, next) => {
	// Vérification autorisation user

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
};

exports.getStructure = async (req, res, next) => {
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
};

exports.getAllStructure = async (req, res, next) => {
	const structures = await db.collection("structure").get();

	res.status(200).json(structures.docs.map((doc) => doc.data()));
};

exports.updateStructure = async (req, res, next) => {
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
};

exports.deleteStructure = async (req, res, next) => {
	await db.collection("structure").doc(req.body.name).delete();

	res.status(200).json({
		message: "Structure supprimée !",
	});
};
